import React from 'react';
import '../styles/Node.css';

export default function Node({ row, col, isStart, isEnd, isWall, onMouseDown, onMouseEnter, onMouseUp }) {
  const extraClass = isStart ? 'node-start'
    : isEnd ? 'node-end'
    : isWall ? 'node-wall'
    : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClass}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={onMouseUp}
    />
  );
}
