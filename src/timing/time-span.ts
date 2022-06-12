export default class TimeSpan {
  public static FromSecond(seconds: number): number {
    return seconds * 1000;
  }
  public static FromMinute(minutes: number): number {
    return minutes * 60 * 1000;
  }
  public static FromHour(hours: number): number {
    return hours * 60 * 60 * 1000;
  }
  public static FromDay(days: number): number {
    return days * 24 * 60 * 60 * 1000;
  }
  public static FromWeek(days: number): number {
    return days * 7 * 24 * 60 * 60 * 1000;
  }
}
