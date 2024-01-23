// @ts-nocheck
import React, {Fragment, useEffect, useState} from "react";
import Lottie from "react-lottie";
import * as animation5 from '../assets/animations/ki_l0_v01.json'
interface InformationCardHomeDataProps {
  title: string;
  desc: string;
  animation: any;
}
const InformationCardHome: React.FC<InformationCardHomeDataProps> = ({title, desc, animation }) => {
  console.log('animation', animation)
  const [isStopped, setIsStopped] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const innerHtml = { __html: title }

  const [expanded, setExpanded] = useState(false);

  const text = "Ваш скрытый текст здесь";

  const toggleText = () => {
    setExpanded(!expanded);
  }

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // передаем пустой массив зависимостей, чтобы обработчик события resize добавлялся только один раз

  if (windowWidth >= 629) {

  }

  const styles: React.CSSProperties = {
    textOverflow: "ellipsis",
    overflow: expanded ? "visible" :"hidden",
    display: expanded ? "block" : "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: expanded ? 'none' : 6,
  };

  return (
  <Fragment>
    <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[57px] w-[630px] max-[1439px]:w-full max-[1439px]:gap-10 max-sm:p-[25.2px]">
      <div className="card-home-animation flex">
        <Lottie options={animation}
                height={132}
                width={132}
                isStopped={isStopped}
                isPaused={isPaused}/>
      </div>
      <div style={{height: expanded ? 'auto' : 'auto', overflow: 'hidden',}} className="card__content flex flex-col items-start gap-[29px] max-[1439px]:gap-[15px]">
        <h3 className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[150%]">
          <div dangerouslySetInnerHTML={{__html: title}} />
        </h3>
        <p style={windowWidth <= 629 ? styles : null} className="text-content leading-[170%] tracking-[.17px] max-sm:text-[15px] max-sm:leading-[160%]">
          {desc}
        </p>
        <p onClick={toggleText} className="hide-text text-[15px] leading-[170%] text-[#097990] min-[629px]:hidden">
          {expanded ? 'Скрыть' : 'Читать полностью'}
        </p>
      </div>
    </div>
  </Fragment>
)};

export default InformationCardHome;

/*

<script>
  window.addEventListener('DOMContentLoaded', function () {
  let containers = document.querySelectorAll('.card__content');

  let screenWidth = window.innerWidth;

  containers.forEach(container => {
  let textContainer = container.querySelector('.text-content');
  let toggleButton = container.querySelector('.hide-text');

  //  состояние текста как свёрнутое
  let isExpanded = false;
  textContainer.style.minHeight = '144px'; // Меняем minHeight на minHeight для корректной анимации
  textContainer.style.transition = 'min-height 500ms'; // Добавляем анимацию

  toggleButton.textContent = 'Читать полностью';

  toggleButton.addEventListener('click', function () {
  if (isExpanded) {
  // Сворачиваем текст
  textContainer.style.minHeight = '144px';
  toggleButton.textContent = 'Читать полностью';
  textContainer.classList.add('max-md:line-clamp-6'); // Добовляем класс для троеточия
  toggleButton.setAttribute('aria-expanded', 'false');

} else {
  // Разворачиваем текст
  textContainer.style.minHeight = '290px'; // Анимируем изменение minHeight вместо minHeight
  toggleButton.textContent = 'Скрыть';
  setTimeout(() => {
  textContainer.classList.remove('max-md:line-clamp-6'); // Удаляем класс для троеточия
}, 500);
  toggleButton.setAttribute('aria-expanded', 'true');

}
  isExpanded = !isExpanded;
});
});
});
</script>*/
