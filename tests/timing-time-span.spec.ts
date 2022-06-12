import { expect } from "chai";
import "mocha";
import TimeSpan from "../src/timing/time-span";

describe("Timing | TimeSpan", () => {
  it("Value Validation | FromSecond", () => {
    const result = TimeSpan.FromSecond(5);
    expect(result).to.equals(5000);
  });
  it("Value Validation | FromMinute", () => {
    const result = TimeSpan.FromMinute(5);
    expect(result).to.equals(300000);
  });
  it("Value Validation | FromHour", () => {
    const result = TimeSpan.FromHour(5);
    expect(result).to.equals(18000000);
  });
  it("Value Validation | FromDay", () => {
    const result = TimeSpan.FromDay(5);
    expect(result).to.equals(432000000);
  });
  it("Value Validation | FromWeek", () => {
    const result = TimeSpan.FromWeek(5);
    expect(result).to.equals(3024000000);
  });
});
