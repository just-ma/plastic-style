import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// home
import Home from './home/Home';

// admin
import TextEditor from './admin/ui/TextEditor';

// reviews
import { reviewPagePath, reviewsPath } from './reviews/routes';
import ReviewPage from './reviews/ui/review-page/ReviewPage';

// lists
import { listPagePath, listsPath } from './lists/routes';
import ListPage from './lists/ui/list-page/ListPage';

// features
import { featurePagePath, featuresPath } from './features/routes';
import FeaturePage from './features/ui/feature-page/FeaturePage';

// podcasts
import { podcastPagePath, podcastsPath } from './podcasts/routes';
import PodcastSeasonPage from './podcasts/ui/podcast-page/PodcastSeasonPage';

// contact
import styled from 'styled-components';
import AppHeader from './app/ui/AppHeader';
import { APP_BACKGROUND_COLOR } from './app/ui/constants';

const AppContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${APP_BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
`;

export default function App(): React.ReactElement {
  return (
    <AppContainer>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin/text-editor" element={<TextEditor />} />

          <Route path={reviewsPath()} element={<Home category="reviews" />} />
          <Route path={reviewPagePath(':reviewId')} element={<ReviewPage />} />

          <Route path={listsPath()} element={<Home category="lists" />} />
          <Route path={listPagePath(':listId')} element={<ListPage />} />

          <Route path={featuresPath()} element={<Home category="features" />} />
          <Route path={featurePagePath(':featureId')} element={<FeaturePage />} />

          <Route path={podcastsPath()} element={<Home category="podcasts" />} />
          <Route path={podcastPagePath(':podcastId')} element={<PodcastSeasonPage />} />

          {/* <Route path={contactPath()} element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}
