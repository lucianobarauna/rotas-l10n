import React from "react";
import { Redirect } from "react-router-dom";
import { Home, About } from "../pages/";
import { defaultLocale, utilLocalizeRoutes } from "../locales/";

const routes = [
  {
    path: "/",
    exact: true,
    localize: false,
    component: () => <Redirect to={`/${defaultLocale}`} />
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/",
    component: Home
  }
];

export default utilLocalizeRoutes(routes);
