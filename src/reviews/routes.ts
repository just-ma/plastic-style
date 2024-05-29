export const REVIEWS_PATH = '/reviews';

export const reviewsPath = (reviewId?: string): string => {
  if (!reviewId) {
    return REVIEWS_PATH;
  }

  return `${REVIEWS_PATH}#${reviewId}`;
};

export const reviewPagePath = (reviewId: string): string => {
  return `${reviewsPath()}/${reviewId}`;
};
