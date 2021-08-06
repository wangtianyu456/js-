function create(Con, ...args) {
  let obj = new Object();
  obj.__proto__ = Con.prototype;
  let result = Con.apply(obj, ...args);
  return typeof result === "object" ? result : obj;
}
