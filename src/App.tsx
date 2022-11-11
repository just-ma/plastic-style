import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page from './app/ui/Page';
import DecorativeBanner from './app/ui/DecorativeBanner';
import VinylRecordContainer from './app/ui/VinylRecordContainer';

// home
import Home from './home/Home';

// admin
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
      <VinylRecordContainer />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin/text-editor" element={<TextEditor />} />

          <Route path={reviewsPath()} element={<Reviews />} />
          <Route path={reviewPagePath(':reviewId')} element={<ReviewPage />} />

          <Route path={listsPath()} element={<Lists />} />
          <Route path={listPagePath(':listId')} element={<ListPage />} />

          <Route path={featuresPath()} element={<Features />} />
          <Route path={featurePagePath(':featureId')} element={<FeaturePage />} />

          <Route path={podcastsPath()} element={<Podcasts />} />
          <Route path={podcastPagePath(':podcastId')} element={<PodcastSeasonPage />} />

          <Route path={contactPath()} element={<Contact />} />
        </Routes>
      </Page>
    </Router>
  );
}
