import type { FunctionComponent } from "react";
import React from "react";
import { Navigation, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import AdditionalInformation from "../../components/additional-information/Services";
import ServicesContent from "./components/services-content/ServicesContent";

const Services: FunctionComponent = () => {
    const namePage = "Услуги"

    return(
        /*удалил класс - container*/
      <div className="view-wrapper">
        <MetaInfo {...getRouteMetaInfo("Services")} />
          <div className="px-20 pt-[120px] overflow-x-hidden max-sm:px-4 max-sm:pt-[53px]">
              <Navigation namePage={namePage}/>
              <div className="flex flex-wrap gap-5 mt-10 mb-20 max-sm:my-5 max-sm:gap-[15px]">
                  <ServicesContent />
                  <ServicesContent />
                  <ServicesContent />
                  <ServicesContent />
                  <ServicesContent />
                  <ServicesContent />
                  <ServicesContent />
              </div>
              <AdditionalInformation />
          </div>
      </div>
    )
};

export default Services;
