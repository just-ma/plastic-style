export const FEATURES_PATH = '/features';

export const featuresPath = (featureId?: string): string => {
  if (!featureId) {
    return FEATURES_PATH;
  }

  return `${FEATURES_PATH}#${featureId}`;
};

export const featurePagePath = (featureId: string): string => {
  return `${featuresPath()}/${featureId}`;
};
