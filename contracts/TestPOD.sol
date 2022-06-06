// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.4 <0.9.0;
import "./PortOfDetection.sol";

contract TestPOD is PortOfDetection {
    bool public isMintingActive2;

    function setIsMintingActive2(bool _isMintingActive) external onlyOwner {
        isMintingActive2 = _isMintingActive;
    }

    constructor(uint8 _numChapters) PortOfDetection(_numChapters) {}

    function randomUnmintedChapterIndex() public view chaptersAvailable returns (uint8) {
        return _randomUnmintedChapterIndex();
    }

    function removeFromUnmintedChaptersList(uint8 _index) public chaptersAvailable {
        _removeFromUnmintedChaptersList(_index);
    }

    function getChapterIdToMint() public chaptersAvailable returns (uint8) {
        return _getChapterIdToMint();
    }

    function getUnmintedChaptersList() public view returns (uint8[] memory) {
        return _unmintedChapters;
    }
}
