import { Footer, BackToTop, Header } from "./components";
import {
  Fragment,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import React from "react";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;
