// @flow
import type { Node, Declaration, Block, SourceLocation } from "@babel/parser";
import NODE from "./nodes";
import { compose } from "./utils";

type Tree =
  | Node
  | {
      body: Array<Node> | Node,
      kind?: ?string,
      loc: SourceLocation
    };

export type TraverseMeta = {
  kind?: ?string
};

const mixBodyToArrowFunctionExpression = (currentNode: Node) => {
  if (
    currentNode.type !== NODE.ARROW_FUNCTION_EXPRESSION ||
    currentNode.body.type === NODE.BLOCK_STATEMENT
  ) {
    return currentNode;
  }
  currentNode.body = {
    type: NODE.BLOCK_STATEMENT,
    body: [
      {
        type: NODE.RETURN_STATEMENT,
        argument: currentNode.body,
        loc: currentNode.loc
      }
    ]
  };
  return currentNode;
};

const mixDeclarationsInideForBlock = (currentNode: Node) => {
  if (currentNode.type !== NODE.FOR_STATEMENT || currentNode.init === null) {
    return currentNode;
  }
  if (currentNode.body.type === NODE.EMPTY_STATEMENT) {
    currentNode.body = {
      type: NODE.BLOCK_STATEMENT,
      body: [],
      loc: currentNode.init.loc
    };
  }
  currentNode.body.body.unshift(currentNode.init);
  return currentNode;
};

const getBody = (currentNode: any) =>
  currentNode.body ||
  currentNode.declarations ||
  currentNode.properties ||
  [
    currentNode.consequent,
    currentNode.value,
    currentNode.init,
    currentNode.right,
    currentNode.left,
    currentNode.argument
  ].filter(Boolean);

const getNextParent = (currentNode: Tree, parentNode: ?Tree) =>
  parentNode &&
  ((NODE.isFunction(parentNode) && currentNode.type === NODE.BLOCK_STATEMENT) ||
    (NODE.isScopeCreator(parentNode) && !NODE.isScopeCreator(currentNode)))
    ? parentNode
    : currentNode;

const getCurrentNode = compose(
  mixDeclarationsInideForBlock,
  mixBodyToArrowFunctionExpression
);

const traverseTree = (
  node: Tree,
  pre: (Tree, Tree, TraverseMeta) => void,
  post: (Tree, Tree, TraverseMeta) => void,
  parentNode: ?Tree = null,
  meta?: TraverseMeta = {}
) => {
  const currentNode = getCurrentNode(node, parentNode, meta);
  pre(currentNode, parentNode, meta);
  const body = getBody(currentNode);
  if (!body) {
    return;
  }
  const nextParent = getNextParent(currentNode, parentNode);
  if (Array.isArray(body)) {
    body.forEach(childNode =>
      traverseTree(childNode, pre, post, nextParent, {
        ...meta,
        kind: currentNode.kind
      })
    );
  } else {
    traverseTree(body, pre, post, nextParent, meta);
  }
  post(currentNode, parentNode, meta);
};

export default traverseTree;
