import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChooseMeme from './pages/choose-meme/ChooseMeme';
import Editor from './pages/editor/Editor';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ChooseMeme />
        </Route>
        <Route path="/editor/:id">
          <Editor />
        </Route>
        <Route exact path="/editor">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
