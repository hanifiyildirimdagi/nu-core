import { expect } from "chai";
import "mocha";

import HandlerDecorator from "../src/decorators/handlers";

class TempClass {
  @HandlerDecorator.ErrorHandling((error: any): void => {
    console.log("Error expected.");
  })
  public static TestMethod(q: string): void {
    const qq = "";
    throw new Error("Test error");
  }
  @HandlerDecorator.ErrorHandling((error: any): void => {})
  public static TestMethod2(q: string): string {
    return `${q} - true`;
  }

  @HandlerDecorator.ErrorHandling((error: any) => {
    throw new Error("TestMethod3 handled");
  })
  public static TestMethod3() {
    throw new Error("TestMethod3");
  }

  @HandlerDecorator.ErrorHandling(async(error: any) => {})
  public static async TestMethod4() {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    throw new Error("TestMethod4");
  }
}

describe("Handler Decorators", () => {
  it("It must not return throw when using sync method", () => {
    expect(() => {
      TempClass.TestMethod("name");
    }).not.throw();
  });

  it("It must return value when using sync method", () => {
    expect(TempClass.TestMethod2("test")).to.equal("test - true");
  });

});
