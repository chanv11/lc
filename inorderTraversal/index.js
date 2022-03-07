function inOrderTraversal(root) {
  const res = []
  const inOrder = (root) => {
    if (root === null) {
      return
    }
    inOrder(root.left)
    res.push(root)
    inOrder(root.right)
  }
  inOrder(root)
  return res
}