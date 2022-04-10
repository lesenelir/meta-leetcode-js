# 二叉树



### 二叉树题目分类

- 二叉树的遍历方式
- 二叉树的属性
- 二叉树的修改与构造
- 求二叉搜索树的属性



### 二叉树的遍历

- 深度优先遍历（先往深走，遇到叶子节点再往回走）
  - 前序遍历（递归法，迭代法）
  - 中序遍历（递归法，迭代法）
  - 后序遍历（递归法，迭代法）
- 广度优先遍历（一层一层去遍历）
  - 层次遍历（迭代法）



>     栈是递归的一种实现结构，前中后序遍历逻辑可以借助栈使用非递归的方式来实现
>
>     层次遍历可以用队列来模拟



---



### 二叉树的递归遍历



**递归写法三个要素：**

- 确定递归函数的参数和返回值
  - 递归参数是递归过程中需要处理的参数
  - 返回值是递归函数返回的类型
- 确定终止条件
  - 操作系统用一个栈保存递归的信息，如果没有终止条件或终止条件不对，则会发生栈溢出
  - 二叉树的终止条件：遇到了空节点
- 确定单层递归的逻辑
  - 实现递归的过程



> 二叉树的递归参数：二叉树的头节点的指针 + 数组存放遍历的结果（JS有闭包，可以把数组定义在外部函数）



**递归的实现：**

递归的每一次调用都会把函数的局部参数、参数值、返回地址等压入调用栈



---

### 二叉树的层次遍历



二叉树的层次遍历

需要用到队列

```js
var levelOrder = function(root) {
  let queue = []
  if (root !== null) queue.push(root)

  while (queue.length !== 0) {
    let node = queue.shift()
    console.log(node.val) // 执行相关操作
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }

};
```

>  对于出对的元素，如果该出队元素有左右节点，则需要依次在队列中添加左右节点



**对于层序遍历还要考虑对于同一层的节点元素的操作**

```js
var levelOrder = function(root) {
  if (root === []) return []

  let queue = []
  let res = []
  if (root !== null) queue.push(root)

  while (queue.length !== 0) {
    // 记录当前层级保存的节点数
    let levelCount = queue.length
    // 存放每一层的节点
    let curLevel = []
    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      // 此处往下的片段是对于操作元素的片段，其余都为模版
      curLevel.push(node.val) // 把当前节点的值存入临时数组
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(curLevel)
  }
  return res
};
```











