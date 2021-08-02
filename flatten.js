const flatten = (list, depth = 1) => {
  if (depth === 0) return list;
  return list.reduce((memo, curr) => {
    if (Array.isArray(curr)) {
      return [...memo, ...flatten(curr, depth - 1)];
    } else {
      return [...memo, curr];
    }
  }, []);
};
