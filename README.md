# Graph Path Visualizer 🔍

A web-based visualizer for popular pathfinding algorithms built using **ReactJS**, **JavaScript**, **Vite**, and **Tailwind CSS**. This project enables users to understand how algorithms like **DFS**, **BFS**, and **Dijkstra’s** work in real-time on a 2D grid.

---

## 🚀 Features

- 🎯 **Interactive Grid**: Place start/end nodes, create walls, and reset the grid.
- 📌 **Algorithms Supported**:
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - Dijkstra’s Algorithm
- 👀 **Real-time Visualization**: Step-by-step traversal of each node.
- 📊 **Educational Overlay**: Learn time and space complexities in an intuitive way.

---

## 📷 UI Preview

_Pic_ – <img width="1300" height="832" alt="image" src="https://github.com/user-attachments/assets/747ce504-9b92-4b5b-bddb-1c093e698279" />
---

## 🧠 Technologies Used

- ⚛️ ReactJS
- 🧠 JavaScript (ES6+)
- 💨 Tailwind CSS
- 🌐 HTML5/CSS3
- ⚡ Vite (build tool)

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/aditya3singh/Graph-Path-Visualizer.git
cd Graph-Path-Visualizer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Navigate to: http://localhost:5173

📁 Project Structure
arduino
Copy
Edit
Graph-Path-Visualizer/
├── public/
├── src/
│   ├── algorithms/
│   │   ├── bfs.js
│   │   ├── dfs.js
│   │   └── dijkstra.js
│   ├── components/
│   │   ├── Grid.jsx
│   │   ├── Node.jsx
│   │   └── Controls.jsx
│   ├── App.jsx
│   └── PathfindingVisualizer.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── README.md
📚 Algorithm Summaries
🔍 Depth-First Search (DFS): Explores as far as possible before backtracking.

Uses recursion or a stack.

🔍 Breadth-First Search (BFS): Explores all neighbors at one depth before moving deeper.

Uses a queue.

🔍 Dijkstra’s Algorithm: Calculates the shortest path from start to all nodes.

Uses a priority queue.

🎮 Controls Guide
Left Click: Place/remove wall

Shift + Click: Set Start Node

Ctrl + Click: Set End Node

Visualize Buttons: Run a selected algorithm

Clear Button: Reset the grid

🤝 Contribution
Contributions are welcome!
If you're planning major changes, kindly open an issue first to discuss.

📜 License
Licensed under the MIT License.

👨‍💻 Author
Aditya Singh Gautam
GitHub Profile

Feel free to connect and contribute!
