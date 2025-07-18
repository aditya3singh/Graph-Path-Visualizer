export function dijkstra(grid, startNode, endNode) {
  const visited = [];
  startNode.distance = 0;
  const unvisited = grid.flat();

  while (unvisited.length) {
    unvisited.sort((a, b) => a.distance - b.distance);
    const closest = unvisited.shift();

    if (closest.isWall) continue;
    if (closest.distance === Infinity) break;

    closest.isVisited = true;
    visited.push(closest);

    if (closest === endNode) break;

    for (const neighbor of getNeighbors(closest, grid)) {
      if (!neighbor.isVisited) {
        const dist = closest.distance + 1;
        if (dist < neighbor.distance) {
          neighbor.distance = dist;
          neighbor.previousNode = closest;
        }
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
