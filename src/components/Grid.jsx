import React, { useState, useEffect } from 'react';
import Node from './Node';
import { bfs } from '../algorithms/bfs';
import { dfs } from '../algorithms/dfs';
import { dijkstra } from '../algorithms/dijkstra';

const ROWS = 20;
const COLS = 40;
const START_ROW = 5;
const START_COL = 5;
const END_ROW = 10;
const END_COL = 30;

const createNode = (row, col) => ({
  row,
  col,
  isStart: row === START_ROW && col === START_COL,
  isEnd: row === END_ROW && col === END_COL,
  distance: Infinity,
  isVisited: false,
  isWall: false,
  previousNode: null,
});

const initialGrid = () => {
  const grid = [];
  for (let row = 0; row < ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < COLS; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
};

export default function Grid() {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    setGrid(initialGrid());
  }, []);

  const handleMouseDown = (row, col) => {
    const newGrid = toggleWall(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = toggleWall(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => setMouseIsPressed(false);

  const toggleWall = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = { ...node, isWall: !node.isWall };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  const animate = (nodes) => {
    for (let i = 0; i <= nodes.length; i++) {
      if (i === nodes.length) return;
      setTimeout(() => {
        const node = nodes[i];
        const element = document.getElementById(`node-${node.row}-${node.col}`);
        if (!node.isStart && !node.isEnd) {
          element.className = 'node node-visited';
        }
      }, 10 * i);
    }
  };

  const visualize = (type) => {
    const newGrid = grid.map(row => row.map(node => ({ ...node, isVisited: false, distance: Infinity, previousNode: null })));
    const start = newGrid[START_ROW][START_COL];
    const end = newGrid[END_ROW][END_COL];
    let result;

    switch (type) {
      case 'BFS': result = bfs(newGrid, start, end); break;
      case 'DFS': result = dfs(newGrid, start, end); break;
      case 'Dijkstra': result = dijkstra(newGrid, start, end); break;
      default: return;
    }

    setGrid(newGrid);
    animate(result);
  };

  return (
    <>
      <div className="controls">
        <button onClick={() => visualize('BFS')}>Visualize BFS</button>
        <button onClick={() => visualize('DFS')}>Visualize DFS</button>
        <button onClick={() => visualize('Dijkstra')}>Visualize Dijkstra</button>
      </div>
      <div className="grid">
        {grid.map((row, i) => (
          <div key={i}>
            {row.map((node, j) => (
              <Node key={j} {...node}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
                onMouseUp={handleMouseUp}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
