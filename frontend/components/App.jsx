import React from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from  "../util/route_util";

import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
  <div>
    <Switch>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
