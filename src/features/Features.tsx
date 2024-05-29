import React, { useEffect } from 'react';

import { Feature } from './models/types';
import { FEATURES } from './models/constants';

import FeatureListItem from './ui/FeatureListItem';

export default function Features(): React.ReactElement {
  useEffect((): void => {
    if (!location.hash) {
      return;
    }

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView();
    }
  }, []);

  return (
    <div>
      {FEATURES.map((feature: Feature) => (
        <FeatureListItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
