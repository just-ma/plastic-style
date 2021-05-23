import React from 'react';

export default function Page(Component: React.ComponentType)  {
  const component = () => {
    return (
      <div>
        <Component />
      </div>
    );
  };

  return component;
}