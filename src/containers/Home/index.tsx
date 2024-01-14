import { MetaInfo } from "../../components";
import type { FunctionComponent } from "react";
import { getRouteMetaInfo } from "../../config/routes.config";
import React from "react";

const Home: FunctionComponent = () => (
  <div className="view-wrapper">
    <MetaInfo {...getRouteMetaInfo("Home")} />
  </div>
);

export default Home;
