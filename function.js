/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/* 
图像渲染 
*/
let floodFill = function (image, sr, sc, newColor) {
  let current = image[sr][sc];
  dfs(image, sr, sc, current, newColor);
  return image;
};

function dfs(image, sr, sc, current, newColor) {
  let row = image[sr];
  if (row === undefined) return;

  let cell = row[sc];
  if (cell === undefined || cell !== current || cell === newColor) return;

  row[sc] = newColor;
  dfs(image, sr + 1, sc, current, newColor);
  dfs(image, sr - 1, sc, current, newColor);
  dfs(image, sr, sc + 1, current, newColor);
  dfs(image, sr, sc - 1, current, newColor);
}

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2
  )
);
/* 
从上到下打印二叉树 
*/
const TreeNode = require("./tree")
let levelOrder = function (root) {
  let queue = [root]
  let res = []
  if (!root) return res
  let level = 0
  while (queue.length) {
    level++
    let subRes = []
    let len = queue.length
    let shouldReverse = level % 2 === 0

    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      subRes.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    // 偶数行 把结果子数组reverse即可
    if (shouldReverse) {
      subRes.reverse()
    }
    res.push(subRes)
  }
  return res
}

let tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.right = new TreeNode(3)
tree.right.right = new TreeNode(5)
console.log(levelOrder(tree))