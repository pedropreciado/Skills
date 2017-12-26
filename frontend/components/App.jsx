import React from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from  "../util/route_util";

import SessionFormContainer from "./session_form/session_form_container";
import SkillIndexContainer from "./skills/skills_index_container";
import UserIndexContainer from "./user/user_index_container";
import UserShowContainer from "./user/user_show_container";

const App = () => (
  <div>

    <Link to="/"
      id="logo"
      >
      <h1>WantedlySkills</h1>
    </Link>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer}/>
      <ProtectedRoute path="/users" component={UserIndexContainer}/>
      <Switch>
        <ProtectedRoute path="/" component={SkillIndexContainer} />
         <Route exact path="/" component={SessionFormContainer} />
      </Switch>
    </Switch>

  </div>
);


export default App;
