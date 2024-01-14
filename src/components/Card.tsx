import type { FunctionComponent } from "react";
import oneSvg from "../assets/img/card-img.jpg";

const Card: FunctionComponent = () => (
  <div className="flex flex-col gap-[20px]">
    <img src={oneSvg} alt="escort-card-img" />
    <div className="flex flex-col gap-[5px]">
      <p className="text-[20px] leading-[145%]">Сергей Гаврилов</p>
      <p className="text-[15px] leading-[170%]">
        Эксперт в области юриспруденции
      </p>
    </div>
  </div>
);

export default Card;
