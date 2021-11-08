import { moveLadder, moveSnake, disableButton } from "../controller.js";
import assert from "assert";

describe("main", function () {
  describe("ladder", function () {
    it("should take a ladder position and return an updated position", function () {
      let result = moveLadder(3);
      assert.strictEqual(result, 51);
    });
    it("should take a ladder position and return an updated position", function () {
      let result = moveLadder(6);
      assert.strictEqual(result, 27);
    });
  });
  describe("snake", function () {
    it("should take a snake position and return an updated position", function () {
      let result = moveSnake(25);
      assert.strictEqual(result, 5);
    });
  });
  describe("disbaleButton", function () {
    it("should disable players button when its not their turn", function () {
      let player1Btn = {
        disabled: false,
      };
      let player2Btn = {
        disabled: false,
      };
      disableButton(true, player1Btn, player2Btn);
      assert.strictEqual(player1Btn.disabled, false);
      assert.strictEqual(player2Btn.disabled, true);
    });
  });
});
