import { expect } from "chai";
import "mocha";
import Dictionary, { DictionaryItem } from "../src/data/dictionary";

describe("Data | Dictionary", () => {
  it("Creation | Dictionary", async () => {
    expect(() => {
      new Dictionary<string, string>();
    }).not.throw();
  });
  it("Workflow | Push element to Dictionary", () => {
    let dict = new Dictionary<string, string>();
    dict.add("testKey", "testValue");
    expect(dict[0].Key).at.equal("testKey");
    expect(dict[0].Value).at.equal("testValue");
  });
  it("Workflow | Get value from Dictionary", () => {
    let dict = new Dictionary<string, string>();
    dict.add("testKey", "testValue");
    expect(dict.getValue("testKey")).to.equal("testValue");
  });
  it("Workflow | Dictionary with another data types", () => {
    let dict1 = new Dictionary<number, string>();
    dict1.add(1, "One");
    dict1.add(2, "Two");
    dict1.add(3, "Tree");
    expect(dict1.getValue(1)).equal("One");
    expect(dict1.getValue(3)).equal("Tree");
    let dict2 = new Dictionary<string, number>();
    dict2.add("One", 1);
    dict2.add("Two", 2);
    dict2.add("Tree", 3);
    expect(dict2.getValue("One")).equal(1);
    expect(dict2.getValue("Tree")).equal(3);
    let dict3 = new Dictionary<
      number,
      { name: string; lastName: string; userName: string }
    >();
    dict3.add(1, {
      name: "foo",
      lastName: "bar",
      userName: "foo-bar",
    });
    dict3.add(2, {
      name: "foo2",
      lastName: "bar2",
      userName: "foo2-bar2",
    });
    expect(dict3.getValue(1)?.name).equal("foo");
    expect(dict3.getValue(2)?.lastName).equal("bar2");
  });
  it("Workflow | Change item value in the Dictionary", () => {
    let dict1 = new Dictionary<number, string>();
    dict1.add(1, "One");
    expect(dict1.getValue(1)).equal("One");
    dict1.setValue(1, "Uno");
    expect(dict1.getValue(1)).equal("Uno");
  });
  it("Workflow | Superior methods", () => {
    let dict1 = new Dictionary<number, string>();
    dict1.add(1, "One");
    dict1.push(new DictionaryItem(2, "Two"));
    expect(dict1.length).to.equal(2);
  });
  it("Workflow | Static Methods - fromObject", () => {
    const obj = {
      foo: "bar",
      foo2: "bar2",
    };
    let dict: Dictionary<string, any> = Dictionary.fromObject(obj);
    expect(dict.length).to.equal(2);
    expect(dict.getValue("foo2")).to.equal("bar2");
    expect(dict[0].Key).equal("foo")
  });
});
