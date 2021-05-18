import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import IndexPage from "./pages";
import {
  MemorizedHeavy,
  MemorizedManyProps,
  MemorizedEveryUpdate,
} from "./pages/Memorized";
import { Heavy, ManyProps, EveryUpdate } from "./pages/NonMemorized";

const PAGES: React.ComponentClass[] = [
  Heavy,
  ManyProps,
  EveryUpdate,
  MemorizedHeavy,
  MemorizedManyProps,
  MemorizedEveryUpdate,
];

const App: React.VFC = () => (
  <div className="App" style={{ padding: "16px" }}>
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
            component={Page}
          />
        ))}
        <Route path="/" component={() => <IndexPage pages={PAGES} />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
