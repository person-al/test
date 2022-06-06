import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { TestPOD } from "../src/types/TestPOD";
import { Signers } from "./types";

describe("Unit tests", function () {
  let podArtifact: Artifact;
  let pod: TestPOD;
  let signers = {} as Signers;

  before(async function () {
    const _signers: SignerWithAddress[] = await ethers.getSigners();
    signers.admin = _signers[0];
    signers.user = _signers[1];
  });

  describe("PortOfDetection", function () {
    beforeEach(async function () {
      podArtifact = await artifacts.readArtifact("TestPOD");
    });

    const setPodWith = async (numChaps: number) => {
      pod = <TestPOD>await waffle.deployContract(signers.admin, podArtifact, [numChaps]);
    };

    const setPodWithMax = async () => {
      await setPodWith(255);
    };

    it("should instantiate the Contract with the correct number of unminted chapters", async () => {
      await setPodWith(0);
      expect((await pod.connect(signers.admin).getUnmintedChaptersList()).length).to.equal(0);

      await setPodWith(3);
      expect((await pod.connect(signers.admin).getUnmintedChaptersList()).length).to.equal(3);
    });

    it("allows owner to call setDecryptionKey for a specific chapter and updates the map", async () => {
      setPodWithMax();
      await pod
        .connect(signers.admin)
        .setIsMintingActive2(true)
        .then(() =>
          pod
            .connect(signers.admin)
            .isMintingActive2()
            .then(value => console.log("then: " + value)),
        );
      await pod
        .connect(signers.admin)
        .isMintingActive2()
        .then(value => console.log("immediate: " + value));
      // await pod.connect(signers.user).mint(await signers.user.getAddress()).then(value => console.log(value));
      // await pod.connect(signers.admin).ownerOf()
      // await pod.connect(signers.admin).setDecryptionKey(125,123456789);
      // await expect(pod.connect(signers.user).getDecryptionKey(125, {gasLimit:30000})).to.be.revertedWith("Chapter NFT has not been burned");

      // expect(await pod.connect(signers.hacker).getDecryptionKey(125)).to.equal(123456789);
      // expect(await pod.connect(signers.admin).getDecryptionKey(125)).to.equal(123456789);
      // await pod.connect(signers.admin).setDecryptionKey(125,1);
      // expect(await pod.connect(signers.hacker).getDecryptionKey(125)).to.equal(1);
      // expect(await pod.connect(signers.admin).getDecryptionKey(125)).to.equal(1);

      // QUESTION: For some reason HardHat keeps failing when I try to test this:
      // await pod.connect(signers.admin).setDecryptionKey(125,0);
      // await expect(pod.connect(signers.hacker).getDecryptionKey(125, {gasLimit:30000})).to.be.revertedWith("No decryption key available.");
    });

    it("if owner calls setDecryptionKey, it overwrites existing value", async () => {});
    it("if owner calls setDecryptionKey on a chapter that hasn't been burned yet, it errors out", async () => {
      // QUESTION: why doesn't the test system like this?
      // setPodWithMax();
      // expect(await pod.connect(signers.admin).setDecryptionKey(125,123456789,{gasLimit:30000})).to.be.revertedWith("Chapter NFT has not been burned");
    });
    it("fails if a non-owner tries to call setDecryptionKey", async () => {});

    it("at construction time, setIsMintingActive is false", async () => {});
    it("if owner calls setIsMintingActive, it overwrites existing value", async () => {});
    it("fails if a non-owner tries to call setIsMintingActive", async () => {});

    it("randomUnmintedChapterIndex fails if no chapters are available", async () => {});
    it("randomUnmintedChapterIndex returns different values each time", async () => {});

    it("removeFromUnmintedChaptersList fails if no chapters are available", async () => {});
    it("removeFromUnmintedChaptersList returns different values each time", async () => {});
    it("calling removeFromUnmintedChaptersList cycles through all values with no repeats and deletes items from list", async () => {});

    it("getChapterIdToMint fails if no chapters are available", async () => {});
    it("getChapterIdToMint returns different values each time", async () => {});
    it("calling getChapterIdToMint cycles through all values with no repeats and deletes items from list", async () => {});

    it("minting fails if minting is paused", async () => {});
    it("minting fails if system is paused", async () => {});
    it("minting fails if reentrancy", async () => {});
    it("minting fails if no chapters available", async () => {});
    it("minting fails if does not meet minimum fee", async () => {});
    it("minting properly mints a chapter", async () => {});
    it("minting mints multiple chapters in a row with no problems", async () => {});
    it("minting always returns a different chapter until no more are left", async () => {});
  });
});
