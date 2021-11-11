import React from 'react';
import { createPortal } from "react-dom";


export const Portal = ({ children, el = "div" }) => {
  const [container] = React.useState(document.createElement(el));

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(children, container);
};
