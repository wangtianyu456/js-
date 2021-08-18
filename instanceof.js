function _instanceof(left, right) {
  if (typeof left !== "object" || left === null) return;
  let proto = left.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = left.__proto__;
  }
}
