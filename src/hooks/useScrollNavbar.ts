// @ts-nocheck
import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const useScrollNavbar = (): void => {
  const location = useLocation()

  let menu: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("header__menu");
  let headerMenuContact: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("header__menu_contact");
  let logo: HTMLCollectionOf<HTMLElement> =document.getElementsByClassName("logo")
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        for (let i = 0; i < menu.length; i++) {
          menu[i].style.marginTop = "0";
        }
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      for (let i = 0; i < logo.length; i++) {
        logo[i].style.opacity = "0";
      }
      for (let i = 0; i < headerMenuContact.length; i++) {
        headerMenuContact[i].style.opacity = "0";
      }
    } else if (window.scrollY < 30) {
      for (let i = 0; i < logo.length; i++) {
        logo[i].style.opacity = "1";
      }
      for (let i = 0; i < headerMenuContact.length; i++) {
        headerMenuContact[i].style.opacity = "1";
      }
    }
    // Если страница прокручена на 300px то добавляем новый стиль background: black;
    if (window.scrollY > 10 && menu.length) {
      for (let i = 0; i < menu.length; i++) {
        // menu[i].style.background = "black";
        menu[i].classList.add("scroll-menu");
      }
    } else  if (window.scrollY < 2) {
      // Если страница прокручена меньше чем на  300px то удаляем стиль background: black;
      for (let i = 0; i < menu.length; i++) {
        // menu[i].style.background = "";
        menu[i].classList.remove("scroll-menu");
      }
    }
  });
}


export default useScrollNavbar;
