import { MetaInfo } from "../../components";
import type { FunctionComponent } from "react";
import { getRouteMetaInfo } from "../../config/routes.config";

const Home: FunctionComponent = () => (
  <div className="view-wrapper">
    <MetaInfo {...getRouteMetaInfo("Home")} />
  </div>
);

export default Home;
