import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootswatch/dist/sandstone/bootstrap.css";
import List from "./components/List";
import Form from "./components/Form";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
};

export default App;
