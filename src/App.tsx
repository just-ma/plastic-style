import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './app/ui/Page';
import Home from './home/Home';
import Lists from './lists/Lists';
import Podcasts from './podcasts/Podcasts';
import Reviews from './reviews/Reviews';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page(Home)} />
        <Route exact path="/reviews" component={Page(Reviews)} />
        <Route exact path="/lists" component={Page(Lists)} />
        <Route exact path="/podcasts" component={Page(Podcasts)} />
      </Switch>
    </Router>
  );
}
