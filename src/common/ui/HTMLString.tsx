import React, { useMemo } from 'react';

type InnerHTMLDefinition = {
  __html: string;
};

type ComponentProps = {
  children: string;
  className?: string;
  element?: React.ElementType;
};

export default function HTMLString({ children, className, element }: ComponentProps): React.ReactElement {
  const Element: React.ElementType = element || 'div';

  const innerHTML = useMemo(
    (): InnerHTMLDefinition => ({
      __html: children,
    }),
    [children],
  );

  return <Element className={className} dangerouslySetInnerHTML={innerHTML} />;
}
