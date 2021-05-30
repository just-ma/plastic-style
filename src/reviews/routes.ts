export const REVIEWS_PATH = '/reviews';

export const reviewPagePath = (reviewId: string): string => {
  return `${REVIEWS_PATH}/${reviewId}`;
};
