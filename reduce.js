Array.prototype._reduce = function (callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (prev) {
      prev = callback(prev, this[i], i, this);
    } else {
      prev = callback(this[i], this[i + 1], i + 1, this);
      i++;
    }
  }
  return prev;
};
