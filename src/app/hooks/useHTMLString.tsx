import React, { useEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { useLocation } from 'react-router-dom';

import CustomElement from '../../common/ui/custom/CustomElement';
import ExpandableText from '../../common/ui/ExpandableText';

export default function useHTMLString(): void {
  const location = useLocation();

  const expandableTextRoots = useRef<Root[]>([]);

  useEffect(() => {
    const tooltipElements = document.querySelectorAll('expandableText');
    const customElements = document.querySelectorAll('custom');

    tooltipElements.forEach((e) => {
      const text = e.getAttribute('text');
      const hiddenText = e.getAttribute('hiddenText');

      if (text && hiddenText) {
        const root = createRoot(e);
        root.render(<ExpandableText text={text} hiddenText={hiddenText} />);
        expandableTextRoots.current.push(root);
      }
    });

    customElements.forEach((e) => {
      const id = e.getAttribute('id');

      if (id) {
        const root = createRoot(e);
        root.render(<CustomElement id={id} />);
      }
    });

    return () => {
      expandableTextRoots.current.forEach((root) => root.unmount());
      expandableTextRoots.current = [];
    };
  }, [location.pathname]);
}
