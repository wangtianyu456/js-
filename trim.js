function trim(str) {
  const reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}
