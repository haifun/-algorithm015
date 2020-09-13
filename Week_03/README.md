#### 学习总结

##### 递归模板

* 递归终止条件；
* 处理当前层；
* 下探到下一层；
* 恢复当前层的状态；

##### 思维要点

1. 不要进行人肉递归（最大的误区）

2. 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题）

3. 数学归纳法思维

##### 分治代码模板

```
//Javascript
const divide_conquer = (problem, params) => {

  // recursion terminator

  if (problem == null) {

    process_result

    return

  } 

  // process current problem

  subproblems = split_problem(problem, data)

  subresult1 = divide_conquer(subproblem[0], p1)

  subresult2 = divide_conquer(subproblem[1], p1)

  subresult3 = divide_conquer(subproblem[2], p1)

  ...

  // merge

  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level status

}
```