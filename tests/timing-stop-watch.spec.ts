import { assert, expect } from "chai";
import "mocha";
import { StopWatch } from "../src/main";

describe("Timing | StopWatch", () => {
  it("Duration | When Stopped", async () => {
    const ms: number = 100;
    const watch = new StopWatch();
    watch.Start();
    await new Promise((resolve) => setTimeout(resolve, 100));
    const duration = watch.Stop();
    const result = duration >= ms && duration <= ms + 50;
    assert.isTrue(result);
  });
  it("Duration | Resume", async () => {
    const ms: number = 100;
    const watch = new StopWatch();
    watch.Start();
    await new Promise((resolve) => setTimeout(resolve, 100));
    watch.Stop();
    watch.Resume();
    await new Promise((resolve) => setTimeout(resolve, 100));
    const duration = watch.Stop();
    const result = duration >= ms * 2 && duration <= ms * 2 + 50;
    assert.isTrue(result);
  });
  it("Result | Without Start", () => {
    expect(() => {
      new StopWatch().Stop();
    }).throw();
  });
});
