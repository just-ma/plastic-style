import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

const Text = styled.div`
  display: inline;
  color: #ff0059;
  font-weight: 700;
  cursor: pointer;
`;

type ExpandableTextProps = {
  text: string;
  hiddenText: string;
};

export default function ExpandableText({ text, hiddenText }: ExpandableTextProps): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Tooltip
      open={open}
      onMouseEnter={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      title={hiddenText}
      placement="top"
    >
      <Text>{text}</Text>
    </Tooltip>
  );
}
