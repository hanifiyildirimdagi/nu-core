import { assert } from "chai";
import "mocha";
import TimeSpan from "../src/timing/time-span";
import Timing from "../src/timing/timing";

describe("Timing | Timing", () => {
  it("Duration | Sleep", async () => {
    const span = TimeSpan.FromSecond(1);
    let start = Date.now();
    await Timing.Sleep(span);
    const elaptedTime = Date.now() - start;
    const result = elaptedTime >= span && elaptedTime <= span * 1.1;
    assert.isTrue(result);
  });
});
