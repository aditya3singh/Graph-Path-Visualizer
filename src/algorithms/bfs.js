export function bfs(grid, startNode, endNode) {
  const visited = [];
  const queue = [startNode];
  startNode.isVisited = true;

  while (queue.length) {
    const node = queue.shift();
    visited.push(node);
    if (node === endNode) break;

    for (const neighbor of getNeighbors(node, grid)) {
      if (!neighbor.isVisited && !neighbor.isWall) {
        neighbor.isVisited = true;
        neighbor.previousNode = node;
        queue.push(neighbor);
      }
    }
  }

  return visited;
}

function getNeighbors(node, grid) {
  const { row, col } = node;
  const neighbors = [];
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}
