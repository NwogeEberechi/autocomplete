import React from "react";
import { AutoComplete } from "./components/AutoComplete";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <h1>Autocomplete App</h1>
        <AutoComplete />
      </div>
    </div>
  );
};

export default App;
