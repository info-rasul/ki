import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import HomeGoodQualityBlock from "./HomeGoodQualityBlock";

const HomeGoodQuality: FunctionComponent = () => (
  <Fragment>
      <div className="flex flex-col mt-20 gap-10">
          <h2 className="text-[30px] leading-[140%] tracking-[-0.3px]">Наши ценности</h2>
          <div className="flex justify-between max-[1420px]:flex-col gap-5">
              <HomeGoodQualityBlock />
              <HomeGoodQualityBlock />
              <HomeGoodQualityBlock />
          </div>
      </div>
  </Fragment>
);

export default HomeGoodQuality;
