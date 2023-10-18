import React, { useState } from 'react';

const ExpandableButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return <div>{open ? <div>content</div> : <button onClick={handleClick}>click me</button>}</div>;
};

export default ExpandableButton;
