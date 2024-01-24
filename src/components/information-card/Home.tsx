// @ts-nocheck
import React, {Fragment, useCallback, useEffect, useRef, useState} from "react";
import Lottie, {useLottie} from "lottie-react";
import * as animation5 from "../../assets/animations/ki_l0_v01.json";
interface InformationCardHomeDataProps {
  title: string;
  desc: string;
  animation: any;
}

const style = {
  height: 130,
};
const InformationCardHome: React.FC<InformationCardHomeDataProps> = ({title, desc, animation }) => {
  const [start, setStart] = useState(false)
//@ts-ignore
  const LottieAnimation = useCallback(() => {
    const options = {
      animationData: animation,
      loop: true,
      autoplay: false,
    };

    const { View, play, pause } = useLottie(options, style);
    start ? play() : pause();
    return View;
  }, [start])

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
    <div  onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[60px] max-lg:gap-10 max-sm:p-[25px]">
      <div className="card-home-animation flex">
        <LottieAnimation  />
      </div>
      <div style={{height: expanded ? 'auto' : 'auto', overflow: 'hidden',}} className="card__content flex flex-col items-start gap-[30px] max-[1439px]:gap-[15px]">
        <h3 className="text-[25px] leading-[140%] max-sm:text-[18px] max-sm:leading-[150%]">
          <div dangerouslySetInnerHTML={{__html: title}} />
        </h3>
        <p style={windowWidth <= 629 ? styles : null} className="text-content leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
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
