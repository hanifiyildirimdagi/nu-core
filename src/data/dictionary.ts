// TODO?: Add summary
export class DictionaryItem<K, V> {
  constructor(public Key: K, public Value: V) {}
  public toJSON(): string {
    return JSON.stringify(this);
  }
}

// TODO?: Add summary
export default class Dictionary<K, V> extends Array<DictionaryItem<K, V>> {
  constructor() {
    super();
  }

  // TODO?: Add summary
  public add(key: K, value: V): number {
    return super.push(new DictionaryItem<K, V>(key, value));
  }

  // TODO?: Add summary
  public getValue(objectKey: K): V | undefined {
    return super.find((x: DictionaryItem<K, V>) => x.Key === objectKey)?.Value;
  }

  // TODO?: Add summary
  public setValue(key: K, newValue: V): void {
    const i = super.findIndex((x) => x.Key === key);
    if (i == -1) return;
    let lastValue = this[i];
    this[i].Value = newValue;
  }

  public static fromObject<T extends Object>(obj: T): Dictionary<string, any> {
    if (typeof obj === "string")
      throw new Error("Data cannot be returned from a String type.");
    if (typeof obj === "number")
      throw new Error("Data cannot be returned from a Number type.");
    if (typeof obj === "boolean")
      throw new Error("Data cannot be returned from a Boolean type.");

    const keys = Object.keys(obj);
    if (keys.length === 0) throw new Error("Object is empty.");
    let result = new Dictionary<string, any>();
    for (let i in keys) {
      const value: any | null = Object.values(obj)[i] ?? null;
      result.add(keys[i], value);
    }
    return result;
  }
}
