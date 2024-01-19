// @ts-nocheck
const useScrollNavbar = (): void => {
  let menu: HTMLCollectionOf<HTMLElement> =
    document.getElementsByClassName("header__menu");

  window.addEventListener("scroll", () => {
    // Если страница прокручена на 300px то добавляем новый стиль background: black;
    if (window.scrollY > 300 && menu.length) {
      for (let i = 0; i < menu.length; i++) {
        menu[i].style.background = "black";
        menu[i].classList.add("scroll-menu");
      }
    } else {
      // Если страница прокручена меньше чем на  300px то удаляем стиль background: black;
      for (let i = 0; i < menu.length; i++) {
        menu[i].style.background = "";
        menu[i].classList.remove("scroll-menu");
      }
    }
  });

  /*menu adaptive*/
  const button = document.querySelector('.header__menu_btn');
  let menuAdaptives = document.querySelectorAll<HTMLElement>(".header__menu_adaptive");
  let headerAdaptive = document.querySelector<HTMLElement>(".header__adaptive");
  let headerAdaptiveLogo = document.querySelector<HTMLElement>(".header__adaptive_logo");
  let buttonLine1 = document.querySelector<HTMLElement>(".header__menu_btn_line1");
  let buttonLine2 = document.querySelector<HTMLElement>(".header__menu_btn_line2");
  console.log(button,menuAdaptives, headerAdaptive, headerAdaptiveLogo, buttonLine1, buttonLine2,);


  // Задаем базовые стили для анимации через CSS
  menuAdaptives.forEach((menuAdaptive) => {
    menuAdaptive.style.transition =
      "right 500ms, visibility 500ms, opacity 500ms";
    menuAdaptive.style.display = "none"; // initial style, no need to be transitioned
    menuAdaptive.style.right = "-640px";
    menuAdaptive.style.visibility = "hidden";
    menuAdaptive.style.opacity = "0";
  });

  if (buttonLine1 && buttonLine2 && button) {
    // Добавляем стили анимации для buttonLine1 и buttonLine2
    buttonLine1.style.transition = "transform 500ms";
    buttonLine2.style.transition = "transform 500ms, margin-top 500ms";

    button.addEventListener("click", () => {
      let isOpen = button.classList.toggle("header__menu_active");


      menuAdaptives.forEach((menuAdaptive) => {
        if (!isOpen) {
          menuAdaptive.style.right = "-640px";
          buttonLine1.style.transform = "rotate(0deg)";
          buttonLine2.style.transform = "rotate(0deg)";
          buttonLine2.style.marginTop = "0";
          button.style.gap = "5px";
          headerAdaptive.style.background = "none";
          button.style.background = "rgba(255, 255, 255, 0.04)";
          headerAdaptiveLogo.style.fill = "white";
          buttonLine2.style.backgroundColor = "white";
          buttonLine1.style.backgroundColor = "white";
          setTimeout(() => {
            menuAdaptive.style.visibility = "hidden";
            menuAdaptive.style.opacity = "0";
          }, 500); // задержка равна длительности анимации
        } else {
          menuAdaptive.style.display = "block"; // готовим элемент к показу
          setTimeout(() => {
            menuAdaptive.style.right = "0";
            menuAdaptive.style.visibility = "visible";
            menuAdaptive.style.opacity = "1";
            buttonLine1.style.transform = "rotate(45deg)";
            buttonLine1.style.marginBottom = "-0.5px";
            buttonLine2.style.transform = "rotate(-45deg)";
            buttonLine2.style.marginTop = "-1.3px";
            button.style.gap = "0";
            buttonLine1.style.backgroundColor = "black";
            buttonLine2.style.backgroundColor = "black";
            button.style.backgroundColor = "white";
            headerAdaptive.style.background = "white";
            headerAdaptiveLogo.style.fill = "black";
          }, 0); // выполнить без задержки
        }
      });
    });
  }
};

export default useScrollNavbar;
