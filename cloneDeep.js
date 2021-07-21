function cloneDeep(obj, hash = new WeakMap()) {
  if (typeof obj !== "object") return obj;
  if (typeof obj == null) return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  if (hash.has(obj)) return hash.get(obj);

  const copy = new obj.constructor();
  hash.set(obj, copy);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = cloneDeep(obj[key], hash);
    }
  }
  return copy;
}
