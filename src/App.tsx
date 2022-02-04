import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

import awsExports from './aws-exports.js';

import Page from './app/ui/Page';
import DecorativeBanner from './app/ui/DecorativeBanner';

// home
import { homePath } from './home/routes';
import Home from './home/Home';

// admin
import { adminPath, adminLoginPath, adminTextEditorPath, adminPagePath } from './admin/routes';
import Admin from './admin/Admin';
import AdminLogin from './admin/ui/AdminLogin';
import TextEditor from './admin/ui/TextEditor';

// reviews
import { reviewPagePath, reviewsPath } from './reviews/routes';
import Reviews from './reviews/Reviews';
import ReviewPage from './reviews/ui/review-page/ReviewPage';

// lists
import { listPagePath, listsPath } from './lists/routes';
import Lists from './lists/Lists';
import ListPage from './lists/ui/list-page/ListPage';

// features
import { featurePagePath, featuresPath } from './features/routes';
import Features from './features/Features';
import FeaturePage from './features/ui/feature-page/FeaturePage';

// podcasts
import { podcastPagePath, podcastsPath } from './podcasts/routes';
import Podcasts from './podcasts/Podcasts';
import PodcastSeasonPage from './podcasts/ui/podcast-page/PodcastSeasonPage';

// contact
import { contactPath } from './contact/routes';
import Contact from './contact/Contact';

Amplify.configure(awsExports);

export const client = new AWSAppSyncClient({
  url: awsExports.aws_appsync_graphqlEndpoint,
  region: awsExports.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsExports.aws_appsync_apiKey,
  },
});

export default function App(): React.ReactElement {
  return (
    <Router>
      <DecorativeBanner />
      <Switch>
        <Route exact path={homePath()} component={Page(Home)} />

        <Route exact path={adminPath()} component={Page(Admin, { isAdmin: true })} />
        <Route exact path={adminLoginPath()} component={AdminLogin} />
        <Route exact path={adminTextEditorPath()} component={Page(TextEditor, { isAdmin: true })} />
        <Route exact path={adminPagePath(reviewsPath())} component={Page(TextEditor, { isAdmin: true })} />
        <Route exact path={adminPagePath(listsPath())} component={Page(TextEditor, { isAdmin: true })} />
        <Route exact path={adminPagePath(featuresPath())} component={Page(TextEditor, { isAdmin: true })} />
        <Route exact path={adminPagePath(podcastsPath())} component={Page(TextEditor, { isAdmin: true })} />

        <Route exact path={reviewsPath()} component={Page(Reviews)} />
        <Route exact path={reviewPagePath(':reviewId')} component={Page(ReviewPage)} />

        <Route exact path={listsPath()} component={Page(Lists)} />
        <Route exact path={listPagePath(':listId')} component={Page(ListPage)} />

        <Route exact path={featuresPath()} component={Page(Features)} />
        <Route exact path={featurePagePath(':featureId')} component={Page(FeaturePage)} />

        <Route exact path={podcastsPath()} component={Page(Podcasts)} />
        <Route exact path={podcastPagePath(':podcastId')} component={Page(PodcastSeasonPage)} />

        <Route exact path={contactPath()} component={Page(Contact)} />
      </Switch>
    </Router>
  );
}
