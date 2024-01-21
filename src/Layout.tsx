import { Footer, BackToTop, Header } from "./components";
import {
  Fragment,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import React from "react";
import { useLocation } from "react-router-dom";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const classCss =
    location.pathname === "/" || location.pathname === "/article"
      ? "container-zoom home-page"
      : "container-zoom inner-page";

  return (
    <Fragment>
      <div className={classCss}>
        {children}
        <BackToTop />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
