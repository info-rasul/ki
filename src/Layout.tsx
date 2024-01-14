import { Footer, BackToTop, Header } from "./components";
import {
  Fragment,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import React from "react";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Fragment>
      <div className="container-zoom">
          <Header />
          {children}
          <BackToTop />
          <Footer />
      </div>
  </Fragment>
);

export default Layout;
