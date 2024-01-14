import type { FunctionComponent } from 'react';
import { Fragment } from "react";
import oneSvg from '../assets/img/Frame1.svg';

const InformationCardHome: FunctionComponent = () => (
    <Fragment>
        <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[56px] w-[630px] max-[1439px]:w-full max-[1439px]:gap-10 max-sm:p-[25px]">
            <img className="max-sm:w-[70px] h-[70px]" src={oneSvg} alt="Frame1" />
                <div className="card__content flex flex-col items-start gap-[30px] max-[1439px]:gap-[15px]">
                    <h3 className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[150%]">Комплексная защита <br /> должников от кредиторов</h3>
                    <p className="text-content leading-[170%] max-[450px]:line-clamp-6  max-sm:text-[15px] max-sm:leading-[160%]">
                        Нестабильные условия рынка и жесткая санкционная политика недружественных
                        государств нередко провоцируют ситуации, при которых исполнение кредитных
                        обязательств субъектом предпринимательства становится затруднительным.
                        Своевременное обращение на ранней стадии к команде наших экспертов позволит
                        не только полностью исключить риски наступления негативных последствий для
                        должников, но и выйти победителями в противостоянии с кредиторами.
                    </p>
                    <p className="hide-text text-[15px] leading-[170%] text-[#097990] min-[450px]:hidden">Читать полностью</p>
                </div>
        </div>
    </Fragment>
);

export default InformationCardHome;
