export default class Timing {
  //TODO?: Add a summary
  /**
   * @param ms
   * @example await Wait(1000) | await Wait(TimeSpan.FromSeconds(1))
   * @example
   * doSomething...
   * await Wait(TimeSpan.FromMinute(1))
   * continue...
   */
  public static async Sleep(ms: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //TODO?: Add a summary
  public static CancellationWork = (function () {
    let timer: NodeJS.Timeout;
    return function (callback:CancellationWorkCallback, ms:number) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();
}

type CancellationWorkCallback = () =>void;