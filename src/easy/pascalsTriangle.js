/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(n) {
  const res = [[1]];

  for (let i = 1; i < n; i += 1) {
    const cur = [];

    for (let j = 1; j < i; j += 1) {
      const v = res[i - 1][j - 1] + res[i - 1][j];

      cur.push(v);
    }

    res.push([1, ...cur, 1]);
  }

  return res;
}

// [1]
// [1] [1]
// [1] [2] [1]
