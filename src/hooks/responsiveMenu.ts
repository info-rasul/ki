// @ts-nocheck
import {useEffect, useState} from "react";

const responsiveMenu = (): void => {
    const [menuActive, setMenuActive] = useState(false)
    /*menu adaptive*/
    useEffect(() => {
        let button = document.querySelector('.header__menu_btn');
        let menuAdaptives = document.querySelectorAll<HTMLElement>(".header__menu_adaptive");
        let headerAdaptive = document.querySelector<HTMLElement>(".header__adaptive");
        let headerAdaptiveLogo = document.querySelector<HTMLElement>(".header__adaptive_logo");
        let buttonLine1 = document.querySelector<HTMLElement>(".header__menu_btn_line1");
        let buttonLine2 = document.querySelector<HTMLElement>(".header__menu_btn_line2");

        console.log(menuAdaptives)
        // Задаем базовые стили для анимации через CSS
        menuAdaptives.forEach((menuAdaptive) => {
            menuAdaptive.style.transition = "right 500ms, visibility 500ms, opacity 500ms";
            menuAdaptive.style.display = "none";
            menuAdaptive.style.right = "-640px";
            menuAdaptive.style.visibility = "hidden";
            menuAdaptive.style.opacity = "0";
        });

        if (button) {
            // Добавляем стили анимации для buttonLine1 и buttonLine2
            buttonLine1.style.transition = "transform 500ms";
            buttonLine2.style.transition = "transform 500ms, margin-top 500ms";

            button.addEventListener("click", () => {
                //menuActive ? setMenuActive(false) : setMenuActive(true)
                let isOpen = button.classList.toggle("header__menu_active");
                console.log(isOpen, 'isOpen')
                console.log(menuAdaptives, 'menuAdaptives')

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
    }, [menuActive]);
};
export default responsiveMenu;