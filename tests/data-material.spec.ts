import { expect } from "chai";
import "mocha";
import { Material } from "../src/data/material";

describe("Data | Material", () => {
  it("Result | ReplaceTRCharsToEN", async () => {
    const source = "İıŞşĞğÜuÖöÇç";
    const expectedResult = "IiSsGgUuOoCc";
    const result = Material.Replacer.ReplaceTRCharsToEN(source);
    expect(result).to.equal(expectedResult);
  });
});
