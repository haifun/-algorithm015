### 学习笔记

#### 深度优先搜索、广度优先搜索

* 深度优先从起点开始，先访问与起点有路径相同的节点，一直到路径结束，然后再返回去访问另一条路径。类似于树的前序遍历

* 广度优先是按层进行访问节点的，距离开始节点最近的那些节点首先被访问，类似于树的层序遍历

#### 深度优先搜索代码模板

递归方式

```
// javascript
const visited = new Set();
const dfs = node => {
    if (visited.has(node)) return
    visited.add(node)
    dfs(node.left)
    dfs(node.right)
}
```

#### 广度优先遍历代码模板

```
// javascript
const bfs = (root) => {
    let result = [], queue = [root]
    while (queue.length > 0) {
        let level = [], n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.pop();
            level.push(node.val)
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right); 
        }
        result.push(level);
    }
    return result;
}
```

#### 贪心算法

* 贪心算法是一种在每一步选择中都采取当前状态下最优的选择，从而希望得到全局最优的算法

* 与动态规划的区别在于贪心算法对每个子问题的解决方案都做选择，不能回退，动态规划则会保存以前的运算结果，并根据以前的结果对当前问题进行选择，可以回退

 ** 适用场景：问题能够划分为子问题，且子问题的最优解能够递推到最终问题的最优解，这种子问题最优解称为最优子结构