import { expect } from "chai";
import "mocha";
import { UUID } from "../src/main";

describe("Identitfy | UUID", () => {
  it("Result | V4", async () => {
    const result = UUID.V4();
    const speratorValid = result.split("").filter((x) => x === "-").length == 4;
    const lengthValid = result.length === 36;
    expect(speratorValid && lengthValid).to.equals(true);
  });
});


