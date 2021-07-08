export const PODCASTS_PATH = '/podcasts';

export const podcastsPath = (podcastId?: string): string => {
  if (!podcastId) {
    return PODCASTS_PATH;
  }

  return `${PODCASTS_PATH}#${podcastId}`;
};

export const podcastPagePath = (podcastId: string): string => {
  return `${podcastsPath()}/${podcastId}`;
};
