import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getDateLabel } from '../../../common/utils';
import { Feature } from '../../models/types';
import { MOCK_FEATURES } from '../../models/constants';
import { featuresPath } from '../../routes';

import TitleDisplay from '../../../common/ui/TitleDisplay';
import TitledParagraph from '../../../common/ui/TitledParagraph';
import FooterLink from '../../../common/ui/FooterLink';

const ContentContainer = styled.div`
  margin-top: 50px;
`;

type ComponentProps = {
  id?: string;
};

type RouteParams = {
  featureId: string;
};

export default function FeaturePage({ id }: ComponentProps): React.ReactElement {
  const { featureId = id } = useParams<RouteParams>();

  const review: Feature | null = MOCK_FEATURES.find((r) => r.id === featureId) || null;

  if (!review) {
    return <Navigate to={featuresPath()} />;
  }

  const { title, description, author, image, content, createdAt } = review;

  const dateLabel: string = createdAt ? getDateLabel(createdAt) : '';

  return (
    <div>
      <TitleDisplay
        headerProps={{ title, large: true }}
        image={image}
        description={description}
        thumbnailWidthPx={260}
      />
      <ContentContainer>
        <TitledParagraph leftTitle={author || ''} rightTitle={dateLabel} content={content}></TitledParagraph>
      </ContentContainer>
      <FooterLink to={featuresPath(featureId)}>{'< MORE FEATURES'}</FooterLink>
    </div>
  );
}
