import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./Main"

const App = (props) => {

  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
