import {
  Fragment,
  type FunctionComponent, lazy,
  type PropsWithChildren, useEffect, useState,
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

  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      setTimeout(() => {
        setIsScrolledToBottom(scrolledToBottom);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={classCss} itemScope itemType="http://schema.org/Organization">
        {children}
        <Footer data={isScrolledToBottom}/>
      </div>
    </Fragment>
  );
};

export default Layout;
