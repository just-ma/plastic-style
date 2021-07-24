import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './app/ui/Page';
import Home from './home/Home';
import Admin from './admin/Admin';
import './App.scss';

// reviews
import { reviewPagePath, reviewsPath } from './reviews/routes';
import Reviews from './reviews/Reviews';
import ReviewPage from './reviews/ui/review-page/ReviewPage';

// lists
import { listPagePath, listsPath } from './lists/routes';
import Lists from './lists/Lists';
import ListPage from './lists/ui/list-page/ListPage';

// podcasts
import { podcastPagePath, podcastsPath } from './podcasts/routes';
import Podcasts from './podcasts/Podcasts';
import PodcastSeasonPage from './podcasts/ui/podcast-page/PodcastSeasonPage';

// contact
import { contactPath } from './contact/routes';
import Contact from './contact/Contact';

export default function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page(Home)} />
        <Route exact path="/admin" component={Admin} />

        <Route exact path={reviewsPath()} component={Page(Reviews)} />
        <Route exact path={reviewPagePath(':reviewId')} component={Page(ReviewPage)} />

        <Route exact path={listsPath()} component={Page(Lists)} />
        <Route exact path={listPagePath(':listId')} component={Page(ListPage)} />

        <Route exact path={podcastsPath()} component={Page(Podcasts)} />
        <Route exact path={podcastPagePath(':podcastId')} component={Page(PodcastSeasonPage)} />

        <Route exact path={contactPath()} component={Page(Contact)} />
      </Switch>
    </Router>
  );
}
