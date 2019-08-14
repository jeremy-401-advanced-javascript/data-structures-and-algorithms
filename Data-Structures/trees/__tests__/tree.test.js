it('Can return the maximum value of the entire tree', () => {
  let tree = new BinarySearchTree();
  tree.root = seven;
  tree.root.right = five;
  tree.root.left = two;
  tree.root.left = ten;
  tree.root.right = six;
  tree.root.right = nine;
  tree.root.left = twelve;
  tree.root.right = eleven;
  tree.root.left = thirteen;
  expect(tree.findMaximumValue()).toEqual(13);
});