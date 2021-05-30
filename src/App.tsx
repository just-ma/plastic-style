import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './app/ui/Page';
import Home from './home/Home';
import Lists from './lists/Lists';
import Podcasts from './podcasts/Podcasts';
import { REVIEWS_PATH } from './reviews/routes';
import Reviews from './reviews/Reviews';
import ReviewPage from './reviews/ui/review-page/ReviewPage';

export default function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page(Home)} />
        <Route exact path={REVIEWS_PATH} component={Page(Reviews)} />
        <Route exact path="/reviews/:reviewId" component={Page(ReviewPage)} />
        <Route exact path="/lists" component={Page(Lists)} />
        <Route exact path="/podcasts" component={Page(Podcasts)} />
      </Switch>
    </Router>
  );
}
