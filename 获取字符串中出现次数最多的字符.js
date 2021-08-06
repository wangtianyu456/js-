/**
 * 统计字符串中出现次数最多的字符及次数
 * @param {string} str
 */
function getFrequentChar(str) {
  const dict = {};
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    dict[char] = dict[char] ? dict[char] + 1 : 1;
    if (dict[char] > max) {
      max = dict[char];
      maxChar = char;
    }
  }
  return {
    max,
    maxChar,
  };
}
