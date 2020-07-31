import React from "react";
import { Switch, Route } from "react-router-dom";
import ChooseMeme from "./pages/choose-meme/ChooseMeme";
import Editor from "./pages/editor/Editor";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ChooseMeme />
        </Route>
        <Route path="/editor">
          <Editor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
