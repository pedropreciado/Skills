import React from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from  "../util/route_util";

import SessionFormContainer from "./session_form/session_form_container";
import SkillIndexContainer from "./skills/skills_index_container";

const App = () => (
  <div>
    <h1>WantedlySkills</h1>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      <Switch>
        <ProtectedRoute path="/" component={SkillIndexContainer} />
         <Route exact path="/" component={SessionFormContainer} />
      </Switch>
    </Switch>

  </div>
);

export default App;
