import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

import CustomElement from './CustomElement';
import ExpandableText from './ExpandableText';

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

  useEffect((): void => {
    const tooltipElements = document.querySelectorAll('expandableText');
    const customElements = document.querySelectorAll('custom');

    tooltipElements.forEach((e) => {
      const text = e.getAttribute('text');
      const hiddenText = e.getAttribute('hiddenText');

      ReactDOM.render(<ExpandableText text={text} hiddenText={hiddenText} />, e);
    });
    customElements.forEach((e) => {
      const id = e.getAttribute('id');

      ReactDOM.render(<CustomElement id={id} />, e);
    });
  }, [children]);

  return <Element className={className} dangerouslySetInnerHTML={innerHTML} />;
}
