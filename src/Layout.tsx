import {
  Fragment,
  type FunctionComponent, lazy,
  type PropsWithChildren,
} from "react";

import React from "react";
import { useLocation } from "react-router-dom";
const Footer = lazy(() => import('./components/Footer'));

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const classCss =
    location.pathname === "/"
      ? `container-zoom home-page ${location.pathname.slice(1)}`
      : `container-zoom inner-page ${location.pathname.slice(1)}`;

  return (
    <Fragment>
      <div className={classCss}>
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
