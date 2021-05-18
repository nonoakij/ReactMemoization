import React from 'react';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import { MemorizationHeavy, MemorizationManyProps, MemorizationUpdateEvery } from './pages/Memorization';
import { Heavy, ManyProps, UpdateEvery } from './pages/NonMemorization';
import IndexPage from './pages';

const PAGES: React.ComponentClass[] = [
  Heavy,
  ManyProps,
  UpdateEvery,
  MemorizationHeavy,
  MemorizationManyProps,
  MemorizationUpdateEvery,
];

const App: React.VFC = () => (
  <div className="App" style={{ padding: '16px' }}>
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
