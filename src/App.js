import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { Localizer } from "./components";
import { routes } from "./router";

console.log("app", routes);

export default function App() {
  return (
    <Router>
      <Localizer>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Localizer>
    </Router>
  );
}
