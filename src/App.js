import Todos from "./Components/Todos/Todos";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Welcome on this awesome todo app! 📝</h1>
        <h2 className="subtitle">Your todos are saved in the local storage</h2>
      </div>
      <Todos />
    </div>
  );
};

export default App;
