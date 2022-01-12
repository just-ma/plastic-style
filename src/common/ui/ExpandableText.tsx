import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

const Text = styled.div`
  display: inline;
  color: #ff0059;
  font-weight: 700;
  cursor: pointer;
`;

type ExpandableTextProps = {
  text: string | null;
  hiddenText: string | null;
};

export default function ExpandableText({ text, hiddenText }: ExpandableTextProps): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = useCallback((): void => {
    setOpen(true);
  }, []);

  const handleMouseOut = useCallback((): void => {
    setOpen(false);
  }, []);

  if (!hiddenText) {
    return <>{text}</>;
  }

  return (
    <Tooltip open={open} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} title={hiddenText} placement="top">
      <Text>{text}</Text>
    </Tooltip>
  );
}
