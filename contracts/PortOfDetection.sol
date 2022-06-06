// SPDX-License-Identifier: GPL-3.0

// QUESTION: should I limit the solidity version like this or just go for greater than 0.8.4
pragma solidity >=0.8.4 <0.9.0;
import "./openzeppelin-contracts-4.6.0/token/ERC721/ERC721.sol";
import "./openzeppelin-contracts-4.6.0/access/Ownable.sol";
import "./openzeppelin-contracts-4.6.0/security/Pausable.sol";
import "./openzeppelin-contracts-4.6.0/interfaces/IERC2981.sol";
import "./openzeppelin-contracts-4.6.0/security/ReentrancyGuard.sol";

contract PortOfDetection is ERC721, Pausable, Ownable, IERC2981, ReentrancyGuard {
    /**
    NOTE: there is a 1% royalty back to this contract on resale.
    NOTE: because Solidity does not support AES decryption yet, this contract does not natively decrypt
    any story text for you. However, this is the javascript code the website uses:

    TODO: later fill this in with the exact function used by the website
    **/

    // ============ PROPERTIES & CONSTRUCTOR ============
    uint256 public constant MIN_MINT_FEE = 0.009 ether;
    bool public isMintingActive;
    uint8[] internal _unmintedChapters;
    enum State {
        Unminted,
        Owned,
        Burned
    }
    mapping(uint8 => uint256) internal chapterIdToDecryptionKey;
    mapping(uint8 => State) public chapterIdToState;
    mapping(uint8 => string) public chapterIdToEncryptedText;

    constructor(uint8 _numChapters) ERC721("PortOfDetection", "POD") {
        require(_numChapters <= 255, "Can't mint more than 255 chapters");
        require(_unmintedChapters.length == 0, "The _unmintedChapters list already has values in it somehow");

        for (uint8 i = 0; i < _numChapters; i++) {
            _unmintedChapters.push(i);
        }
        // TODO: set chapterIdToEncryptedText for each chapter
    }

    // ============ MODIFIERS =============
    modifier meetsMinimumMintFee() {
        require(msg.value >= MIN_MINT_FEE, "We request a minimum value of 0.009 ether to mint.");
        _;
    }

    modifier chaptersAvailable() {
        require(_unmintedChapters.length > 0, "No more chapters available to mint.");
        _;
    }

    modifier mintingActive() {
        require(isMintingActive, "Minting is not open");
        _;
    }

    // ============ ADMIN ONLY ============

    function setDecryptionKey(uint8 _chapterId, uint256 _key) external onlyOwner {
        require(chapterIdToState[_chapterId] == State.Burned, "Chapter NFT has not been burned");
        chapterIdToDecryptionKey[_chapterId] = _key;
    }

    function setIsMintingActive(bool _isMintingActive) external onlyOwner {
        isMintingActive = _isMintingActive;
    }

    // ============ MINTING LOGIC ============

    // QUESTION: is it a waste to add the "canMint" modifier to all these functions? I just
    // want to be sure that if they're called by any other function later, there isn't a problem

    function _randomUnmintedChapterIndex() internal view chaptersAvailable returns (uint8) {
        // QUESTION: How gameable is this by miners? This is a small project that likely won't
        // make anyone that much money, so I'm not worried about it being SUPER secure. But
        // I want a minimum sevel of randomness here.
        uint256 random = uint256(keccak256(abi.encodePacked(block.difficulty, block.number, tx.gasprice)));
        return uint8(random % _unmintedChapters.length);
    }

    function _removeFromUnmintedChaptersList(uint8 _index) internal chaptersAvailable {
        _unmintedChapters[_index] = _unmintedChapters[_unmintedChapters.length - 1];
        _unmintedChapters.pop();
    }

    function _getChapterIdToMint() internal chaptersAvailable returns (uint8) {
        uint8 _index = _randomUnmintedChapterIndex();
        uint8 _chapterId = _unmintedChapters[_index];
        // we want this to happen before the mint to prevent reentrancy
        _removeFromUnmintedChaptersList(_chapterId);
        return _chapterId;
    }

    function mint(address to)
        external
        payable
        mintingActive
        whenNotPaused
        nonReentrant
        chaptersAvailable
        meetsMinimumMintFee
        returns (uint8)
    {
        // QUESTION: Should we require that the minter only mint to themselves unless they're the contract owner?
        uint8 _chapterId = _getChapterIdToMint();
        _safeMint(to, _chapterId);
        chapterIdToState[_chapterId] = State.Owned;
        return _chapterId;
    }

    // ============ PUBLIC FUNCTIONS ============

    function getDecryptionKey(uint8 _chapterId) external view returns (uint256) {
        uint256 _key = chapterIdToDecryptionKey[_chapterId];
        require(_key != 0, "No decryption key available.");
        return _key;
    }

    function burn(uint8 _chapterId) external {
        require(chapterIdToState[_chapterId] == State.Owned, "Token must be minted and un-burned in order to burn");
        require(_isApprovedOrOwner(_msgSender(), _chapterId), "ERC721: caller is not token owner nor approved");
        _burn(_chapterId);
        chapterIdToState[_chapterId] = State.Burned;
    }

    // ============ IMPLEMENTING INHERITED FUNCTIONS ============
    function pauseEverything() public onlyOwner {
        _pause();
    }

    function unpauseEverything() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {IERC165-royaltyInfo}.
     */
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        require(_exists(tokenId), "Nonexistent token");

        return (address(this), salePrice / 100);
    }

    // TODO: all of this is from Loot and should be customized to this contract's needs
    function tokenURI(uint256 tokenId) public pure override returns (string memory) {
        string[17] memory parts;
        /* solhint-disable quotes */
        // solhint-disable-next-line max-line-length
        parts[
            0
        ] = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><text x="10" y="20" class="base">';

        parts[1] = "getWeapon(tokenId)";

        parts[2] = '</text><text x="10" y="40" class="base">';

        parts[3] = "getChest(tokenId)";

        parts[4] = '</text><text x="10" y="60" class="base">';

        parts[5] = "getHead(tokenId)";

        parts[6] = '</text><text x="10" y="80" class="base">';

        parts[7] = "getWaist(tokenId)";

        parts[8] = '</text><text x="10" y="100" class="base">';

        parts[9] = "getFoot(tokenId)";

        parts[10] = '</text><text x="10" y="120" class="base">';

        parts[11] = "getHand(tokenId)";

        parts[12] = '</text><text x="10" y="140" class="base">';

        parts[13] = "getNeck(tokenId)";

        parts[14] = '</text><text x="10" y="160" class="base">';

        parts[15] = "getRing(tokenId)";

        parts[16] = "</text></svg>";

        string memory output = string(
            abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8])
        );
        output = string(
            abi.encodePacked(
                output,
                parts[9],
                parts[10],
                parts[11],
                parts[12],
                parts[13],
                parts[14],
                parts[15],
                parts[16]
            )
        );

        // solhint-disable-next-line max-line-length
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Bag #',
                        toString(tokenId),
                        '", "description": "Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(output)),
                        '"}'
                    )
                )
            )
        );
        output = string(abi.encodePacked("data:application/json;base64,", json));
        /* solhint-enable quotes */

        return output;
    }

    // Copied from OpenZeppelin's Strings library
    function toString(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}

/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
/// NOTE: copied from the Loot contract
library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}
