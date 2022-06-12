import { expect } from "chai";
import "mocha";
import { RegularExpression } from "../src/main";

describe("Data | RegularExpression", () => {
  it("Result | Validation - Email", () => {
    const trueSource = "iletisim@hanifiyildirimdagi.com";
    //Missing superior domain
    const wrongSource1 = "foo@bar";
    //Wrong syntax
    const wrongSource2 = "foo.com";
    //Wrong domain
    const wrongSource3 = "1@1.1";
    //With invalid chars
    const wrongSource4 = "foo@öçşi.com";

    expect(RegularExpression.Validation.Email.test(trueSource)).to.equal(true);
    expect(RegularExpression.Validation.Email.test(wrongSource1)).to.equal(
      false
    );
    expect(RegularExpression.Validation.Email.test(wrongSource2)).to.equal(
      false
    );
    expect(RegularExpression.Validation.Email.test(wrongSource3)).to.equal(
      false
    );
    expect(RegularExpression.Validation.Email.test(wrongSource4)).to.equal(
      false
    );
  });
});
