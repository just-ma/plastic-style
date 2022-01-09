import React from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

const Text = styled.div`
  display: inline;
  color: #ff0059;
  font-weight: 700;
  cursor: text;
`;

type ExpandableTextProps = {
  text: string | null;
  hiddenText: string | null;
};

export default function ExpandableText({ text, hiddenText }: ExpandableTextProps): React.ReactElement {
  if (!hiddenText) {
    return <>{text}</>;
  }

  return (
    <Tooltip title={hiddenText} placement="top">
      <Text>{text}</Text>
    </Tooltip>
  );
}
