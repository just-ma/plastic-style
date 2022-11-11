import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page from './app/ui/Page';
import DecorativeBanner from './app/ui/DecorativeBanner';
import Home from './home/Home';
// import Admin from './admin/Admin';
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

export default function App(): React.ReactElement {
  return (
    <Router>
      <DecorativeBanner />
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        {/* <Route  path="/admin" element={Admin} /> */}
        <Route path="/admin/text-editor" element={<TextEditor />} />

        <Route
          path={reviewsPath()}
          element={
            <Page>
              <Reviews />
            </Page>
          }
        />
        <Route
          path={reviewPagePath(':reviewId')}
          element={
            <Page>
              <ReviewPage />
            </Page>
          }
        />

        <Route
          path={listsPath()}
          element={
            <Page>
              <Lists />
            </Page>
          }
        />
        <Route
          path={listPagePath(':listId')}
          element={
            <Page>
              <ListPage />
            </Page>
          }
        />

        <Route
          path={featuresPath()}
          element={
            <Page>
              <Features />
            </Page>
          }
        />
        <Route
          path={featurePagePath(':featureId')}
          element={
            <Page>
              <FeaturePage />
            </Page>
          }
        />

        <Route
          path={podcastsPath()}
          element={
            <Page>
              <Podcasts />
            </Page>
          }
        />
        <Route
          path={podcastPagePath(':podcastId')}
          element={
            <Page>
              <PodcastSeasonPage />
            </Page>
          }
        />

        <Route
          path={contactPath()}
          element={
            <Page>
              <Contact />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
}
