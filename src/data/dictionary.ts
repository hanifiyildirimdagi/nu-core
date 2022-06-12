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
}
