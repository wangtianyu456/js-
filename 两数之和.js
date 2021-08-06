/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
const twoSum = (arr, target) => {
  let hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(target - arr[i])) return [arr[i], hash.get(target - arr[i])];
    hash.set(arr[i], arr[i]);
  }
  return null;
};

const _twoSum = (arr, target) => {
  // 双指针
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    }
  }
  return null;
};
