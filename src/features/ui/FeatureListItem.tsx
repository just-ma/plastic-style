import React from 'react';

import { Feature } from '../models/types';
import { featurePagePath, featuresPath } from '../routes';

import PageListItem from '../../common/ui/PageListItem';

type ComponentProps = {
  feature: Feature;
};

export default function FeatureListItem({
  feature: { id, title, description, image },
}: ComponentProps): React.ReactElement {
  const link: string = featurePagePath(id);
  const preLink: string = featuresPath(id);

  return (
    <PageListItem
      id={id}
      title={title}
      image={image}
      description={description}
      link={link}
      linkLabel="READ MORE >"
      preLink={preLink}
    />
  );
}
