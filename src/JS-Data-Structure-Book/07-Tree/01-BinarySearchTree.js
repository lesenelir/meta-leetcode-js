import {Compare, defaultCompare} from "./util/utils";
import {Node} from "./util/Node";

class BinarySearchTree {

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn  // 用来比较结点值
    this.root = null  // Node类型结点的根结点
  }

  // 1. 二叉搜索树插入新的节点
  // Note： 插入新的节点 一定是插入 二叉搜索树的叶子节点
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)   //
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {  // 插入节点的元素值小于node的元素值
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else { // 插入结点的元素值大雨node的元素值
      if (node.rigth === null) {
        node.rigth = new Node(key)
      } else {
        this.insertNode(node.rigth, key)
      }
    }
  }

  // 2. 二叉搜索树的遍历

  // 先序遍历
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.rigth,  callback)
    }
  }

  // 中序遍历
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.rigth, callback)
    }
  }

  // 后序遍历
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.rigth, callback)
      callback(node.key)
    }
  }

  // 3. 寻找树的最小值
  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  // 4. 寻找树的最大值
  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let current  = node
    while (current !== null && current.rigth !== null) {
      current = current.rigth
    }
    return current
  }

  // 5. 搜索一个特定的值
  search(key) {
    this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.rigth, key)
    } else {
      return true
    }
  }

  // 6. 移除一个结点
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.rigth = this.removeNode(node.rigth, key)
      return node
    } else {
      // 键值等于node.key
      // 删除第一种情况
      if (node.left === null && node.rigth === null) {
        node = null
        return node
      }
      // 删除第二种情况
      if (node.left === null) {
        node = node.rigth
        return node
      } else if (node.rigth === null) {
        node = node.left
        return node
      }
      // 删除第三种情况
      const aux = this.minNode(node.rigth)
      node.key = aux.key
      node.rigth = this.removeNode(node.rigth, aux.key)
      return node
    }
  }


}
