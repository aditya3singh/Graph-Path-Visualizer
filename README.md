# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Graph Path Visualizer

A web-based visualizer for pathfinding algorithms built using ReactJS, JavaScript, HTML, and Tailwind CSS. This project allows users to explore and understand how different pathfinding algorithms like DFS, BFS, and Dijkstra's Algorithm work in real-time on a 2D grid.

🚀 Features

🎯 Interactive Grid: Place start and end nodes, walls, and reset the grid easily.

📌 Multiple Algorithms:

Breadth First Search (BFS)

Depth First Search (DFS)

Dijkstra's Algorithm

👀 Real-time Visualization: Watch the algorithm traverse nodes step-by-step.

📊 Time/Space Complexity Awareness: Educational overlay for algorithm understanding.

📷 Screenshots

Coming soon — GIF or screenshots of the UI

🧠 Technologies Used

ReactJS

JavaScript (ES6+)

Tailwind CSS

HTML5/CSS3

🛠️ How to Run Locally

Clone the repo:

git clone https://github.com/aditya3singh/Graph-Path-Visualizer.git
cd Graph-Path-Visualizer

Install dependencies:

npm install

Start the development server:

npm run dev

Visit http://localhost:5173 in your browser to interact with the app.

📁 Folder Structure

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

📚 Algorithms Explained

🔍 DFS (Depth First Search)

Explores as far as possible along each branch before backtracking.

Uses recursion or a stack.

🔍 BFS (Breadth First Search)

Explores all neighbors at the present depth before moving to the next level.

Uses a queue.

🔍 Dijkstra’s Algorithm

Finds the shortest path from the start to every other node in a weighted graph.

Uses a priority queue.

📌 Controls

Left-click to place walls.

Shift + Click to set the start node.

Ctrl + Click to set the end node.

Visualize Buttons to run each algorithm.

Clear Button to reset the grid.

🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Aditya Singh GautamFeel free to connect:

GitHub

LinkedIn
