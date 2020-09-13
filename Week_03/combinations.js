/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
const res = [];
  const helper = (n, k, path) => {
    if (n < k || k == 0) { // k不能大于n，或，找齐了k个，就结束递归
      if (k == 0) {
        res.push(path.slice());
      }
      return;
    }
    helper(n - 1, k - 1, path.concat(n)); // 选n，C(n-1, k-1)
    helper(n - 1, k, path); // 不选n，C(n-1,k)
  };

  helper(n, k, []);
  return res;
};