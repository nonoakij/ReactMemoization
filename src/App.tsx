import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { PAGES } from "./constants";
import IndexPage from "./pages";

const App: React.VFC = () => (
  <div className="App">
    <BrowserRouter>
      <header>
        <Link to="/">React Memoization</Link>
      </header>
      <Switch>
        {PAGES.map((Page) => (
          <Route
            key={Page.name}
            exact
            path={`/${Page.name}`}
            component={Page.component}
          />
        ))}
        <Route path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
