// TODO?: Add a summary
export default class StopWatch {
  private startTime: number | null = null;
  private endTime: number | null = null;

  private get elapsedTime(): number {
    if (this.startTime === null || this.endTime === null) return 0;
    return this.endTime - this.startTime;
  }

  public Start(): void {
    this.startTime = Date.now();
  }

  public Stop(): number {
    if (this.startTime === null) throw new Error("Watch cannot stopped.");
    this.endTime = Date.now();
    return this.elapsedTime;
  }

  public Reset(): void {
    this.startTime = null;
    this.endTime = null;
  }

  public Resume(): void {
    this.endTime = null;
  }
}
