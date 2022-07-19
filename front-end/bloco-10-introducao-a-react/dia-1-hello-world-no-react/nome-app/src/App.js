import "./App.css";

const tasks = ["tarefa1", "tarefa2", "tarefa3", "tarefa4", "tarefa5"];

const Task = (value, index) => {
  return <li key={index}>{value}</li>;
};

function App() {
  return tasks.map((value, index) => Task(value, index));
}

export default App;
