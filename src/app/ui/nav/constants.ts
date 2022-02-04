import { homePath } from '../../../home/routes';
import { reviewsPath } from '../../../reviews/routes';
import { listsPath } from '../../../lists/routes';
import { featuresPath } from '../../../features/routes';
import { podcastsPath } from '../../../podcasts/routes';
import { contactPath } from '../../../contact/routes';
import { adminPagePath, adminPath, adminTextEditorPath } from '../../../admin/routes';

import { NavMenuItem } from './types';

export const DEFAULT_NAV_MENU: ReadonlyArray<NavMenuItem> = [
  { title: 'Home', link: homePath() },
  {
    title: 'Reviews',
    link: reviewsPath(),
  },
  {
    title: 'Lists',
    link: listsPath(),
  },
  {
    title: 'Features',
    link: featuresPath(),
  },
  {
    title: 'Podcasts',
    link: podcastsPath(),
  },
  {
    title: 'Contact',
    link: contactPath(),
  },
];

export const ADMIN_NAV_MENU: ReadonlyArray<NavMenuItem> = [
  {
    title: 'Admin',
    link: adminPath(),
  },
  {
    title: 'Reviews',
    link: adminPagePath(reviewsPath()),
  },
  {
    title: 'Lists',
    link: adminPagePath(listsPath()),
  },
  {
    title: 'Features',
    link: adminPagePath(featuresPath()),
  },
  {
    title: 'Podcasts',
    link: adminPagePath(podcastsPath()),
  },
  {
    title: 'Text Editor',
    link: adminTextEditorPath(),
  },
];
