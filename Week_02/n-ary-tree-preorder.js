/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const result = [];
  if (root) {
    const temp = [root];
    while (temp.length) {
      const node = temp.pop();
      result.push(node.val);
      for (let i = node.children.length - 1; i >= 0; i--) {
        temp.push(node.children[i]);
      }
    }
  }
  return result;
};
