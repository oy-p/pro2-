import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import AsyncLoad from "@/components/AsyncLoad";

const Login = AsyncLoad(() => import("@/pages/Login"));
const Home = AsyncLoad(() => import("@/pages/Home"));

export let GlobalRouter = null;

const BasicRoute = () => (
  <HashRouter
    ref={ele => {
      GlobalRouter = ele;
    }}
  >
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={Login} />

    </Switch>
  </HashRouter>
);

export default BasicRoute;
