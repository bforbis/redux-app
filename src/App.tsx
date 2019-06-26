import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
    </div>
  );
};

export default App;
