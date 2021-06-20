import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './app/ui/Page';
import Home from './home/Home';
import Admin from './admin/Admin';
import Lists from './lists/Lists';
import Podcasts from './podcasts/Podcasts';

// reviews
import { reviewPagePath, reviewsPath } from './reviews/routes';
import Reviews from './reviews/Reviews';
import ReviewPage from './reviews/ui/review-page/ReviewPage';

export default function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page(Home)} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path={reviewsPath()} component={Page(Reviews)} />
        <Route exact path={reviewPagePath(':reviewId')} component={Page(ReviewPage)} />
        <Route exact path="/lists" component={Page(Lists)} />
        <Route exact path="/podcasts" component={Page(Podcasts)} />
      </Switch>
    </Router>
  );
}
