import type { FunctionComponent } from "react";
import React from "react";
import { Navigation, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import ServicesImg from "../../assets/img/services1.svg";
import ButtonsK from "../../components/ButtonsK";
import oneSvg from "../../assets/img/ServAddInformation.svg";

const Services: FunctionComponent = () => {
    const namePage = "Услуги"

    return(
        /*удалил класс - container*/
      <div className="container">
        <MetaInfo {...getRouteMetaInfo("Services")} />
          <div className="w-[1440px] px-20 pt-[120px] overflow-x-hidden max-sm:px-4 max-sm:pt-[53px]">
              <Navigation namePage={namePage}/>
              <div className="flex flex-wrap gap-x-5 gap-y-[19px] mt-10 mb-[79px] max-sm:my-5 max-sm:gap-[15px]">
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] tracking-[.5px] max-sm:text-[16px]	max-sm:leading-[150%]">
                          Комплексная защита должников от кредиторов
                      </a>
                  </div>
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] max-sm:text-[16px] max-sm:leading-[150%]">
                          Защита от субсидиарной ответственности
                      </a>
                  </div>
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] max-sm:text-[16px] max-sm:leading-[150%]">
                          Сопровождение на всех стадия банкротства в интересах должника
                      </a>
                  </div>
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] max-sm:text-[16px] max-sm:leading-[150%]">
                          Сопровождение <br/> уголовных дел
                      </a>
                  </div>
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] max-sm:text-[16px] max-sm:leading-[150%]">
                          Сопровождение <br/> уголовных дел
                      </a>
                  </div>
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] max-sm:text-[16px] max-sm:leading-[150%]">
                          Сопровождение на всех стадия банкротства
                      </a>
                  </div>
                  <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-[1010px]:w-full max-sm:gap-[25px] max-sm:p-5">
                      <img className="max-sm:w-[48px] max-sm:h-[48px]" src={ServicesImg} alt="services1"/>
                      <a href="/escort" className="text-[25px] leading-[140%] max-sm:text-[16px] max-sm:leading-[150%]">
                          Параллельный <br/> импорт
                      </a>
                  </div>
              </div>
              <div className="flex flex-col justify-between bg-[#097990] px-[40px] pb-[40px] pt-[41px] gap-10 mb-20 relative max-sm:px-[25px] max-sm:pb-[25px] max-sm:pt-5 max-sm:mb-10">
                    <span className="text-white	text-[25px] leading-[138%] max-sm:text-[20px] max-sm:leading-[135%]">
                      Хотите знать больше? <br className="sm:hidden" /> Читайте новости
                        <br className="max-sm:hidden" /> или подписывайтесь на наш телеграм канал
                    </span>
                  <div className="flex justify-start">
                      <ButtonsK />
                  </div>
                  <img
                      className="absolute top-0 right-[34px] max-sm:hidden"
                      src={oneSvg}
                      alt="Vector"
                  />
              </div>
          </div>
      </div>
    )
};

export default Services;
