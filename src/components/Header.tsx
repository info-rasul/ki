// @ts-nocheck
import {useState, type FunctionComponent, useEffect} from "react";
import React, { Fragment } from "react";
import HeaderDot from "../assets/img/header-dot.svg";
import HeaderMenuLine from "../assets/img/header-menu-line.svg";
import useScrollNavbar from "../hooks/useScrollNavbar";
import fourSvg from "../assets/img/subtract-menu.svg";
import closeMenu from "../assets/img/close-menu.svg";

interface HeaderProps {
  isDarMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({isDarMenu}) => {
  useScrollNavbar();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let scrolling: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("services-header");
  if (window.scrollY > 30 && scrolling.length || windowWidth < 783) {
    for (let i = 0; i < scrolling.length; i++) {
      scrolling[i].classList.add("header-scroll");
    }
  } else {
    for (let i = 0; i < scrolling.length; i++) {
      scrolling[i].classList.remove("header-scroll");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="max-md:hidden services-header w-full flex flex-col sticky top-0 z-20 pt-8 pb-9 max-md:p-0">
        <div className="container ">
          <div className="grid grid-cols-8 gap-4 place-content-center max-[1080px]:px-4 max-md:hidden">
            <div className="logo col-span-2 z-10">
              <a href="/">
                <svg className="fill-white max-[900px]:w-[138px] max-[900px]:h-[35px]" width="214" height="56" viewBox="0 0 214 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.2921 9.72033C11.2448 11.0425 9.42491 12.4979 7.86418 14.0616H15.87C18.7628 9.63424 22.9905 6.00857 28.0435 3.62361C22.4353 4.95612 17.4157 7.05736 13.2921 9.72033ZM1.50607 28C1.50607 23.5302 3.28662 19.2876 6.4695 15.5685H14.9547C12.8566 19.2959 11.672 23.5176 11.672 28C11.672 32.3321 12.7785 36.4206 14.7467 40.0548H6.15337C3.16895 36.427 1.50607 32.3195 1.50607 28ZM7.49524 41.5616H15.6283C18.5249 46.1602 22.8479 49.9241 28.0435 52.3764C22.4353 51.0439 17.4157 48.9426 13.2921 46.2797C11.0813 44.852 9.13568 43.2688 7.49524 41.5616ZM25.7801 41.5616H17.436C21.2077 47.0812 27.215 51.2532 34.354 53.0392C30.6997 50.6067 27.7082 46.5338 25.7801 41.5616ZM41.4168 53.9687C35.5925 53.5894 30.3774 48.8312 27.4012 41.5616H41.4168V53.9687ZM42.9229 53.9687L42.9229 41.5616H56.9384C53.961 48.833 48.7469 53.5896 42.9229 53.9687ZM49.9852 53.0393C53.6403 50.6065 56.6323 46.533 58.5596 41.5616H66.9037C63.1319 47.0813 57.1245 51.2534 49.9852 53.0393ZM16.4818 40.0548H67.8579C69.9694 36.4452 71.1616 32.3414 71.1616 28C71.1616 23.5068 69.8846 19.2681 67.6331 15.5685H16.7066C14.4551 19.2681 13.1781 23.5068 13.1781 28C13.1781 32.3414 14.3703 36.4452 16.4818 40.0548ZM56.2962 52.3764C61.4917 49.9241 65.8148 46.1602 68.7114 41.5616H76.8445C75.2041 43.2688 73.2584 44.852 71.0476 46.2797C66.924 48.9426 61.9044 51.0439 56.2962 52.3764ZM69.593 40.0548H78.1864C81.1708 36.427 82.8337 32.3195 82.8337 28C82.8337 23.5302 81.0531 19.2876 77.8702 15.5685H69.385C71.4831 19.2959 72.6677 23.5176 72.6677 28C72.6677 32.3321 71.5612 36.4206 69.593 40.0548ZM68.4697 14.0616H76.4755C74.9148 12.4979 73.0949 11.0425 71.0476 9.72033C66.924 7.05735 61.9044 4.9561 56.2962 3.6236C61.3492 6.00856 65.5769 9.63423 68.4697 14.0616ZM58.4109 14.0616H66.6413C62.8565 8.72908 56.9611 4.70576 49.9852 2.96068C53.5476 5.3318 56.4801 9.26134 58.4109 14.0616ZM42.9229 2.03133C48.6457 2.40387 53.7796 7.003 56.7812 14.0616H42.9229V2.03133ZM41.4168 0.504284C30.1542 0.632515 19.943 3.63177 12.4754 8.4543C4.84935 13.3791 0 20.2723 0 28C0 35.7277 4.84935 42.6209 12.4754 47.5457C20.1064 52.4737 30.6023 55.4979 42.1576 55.5H42.1699C53.7299 55.5 64.2306 52.4755 71.8644 47.5457C79.4904 42.6209 84.3397 35.7277 84.3397 28C84.3397 20.2723 79.4904 13.3791 71.8644 8.4543C64.3967 3.63176 54.1855 0.632511 42.9229 0.504283V0.5H42.1805H42.1699H41.4168V0.504284ZM41.4168 2.03133L41.4168 14.0616H27.5585C30.5601 7.00302 35.6941 2.40389 41.4168 2.03133ZM34.3545 2.96066C30.7922 5.33178 27.8597 9.26133 25.9289 14.0616H17.6984C21.4832 8.72906 27.3786 4.70574 34.3545 2.96066ZM26.5028 18.1411L22.6366 37.4822H31.2102L32.1993 32.5344L33.8577 37.4822H46.7352L50.6723 32.9139L49.7163 37.4822H58.2136L62.0798 18.1411H54.3061L50.3486 22.7457L51.2969 18.1411H37.3459L34.2769 22.1408L35.0764 18.1411H26.5028ZM34.9412 35.9754L32.9631 30.0742H31.1552L29.9755 35.9754H24.4737L27.7375 19.6479H33.2393L32.0224 25.7357H33.4172L38.0884 19.6479H49.4489L47.7004 28.1382L54.9973 19.6479H60.2427L56.9789 35.9754H51.5704L53.3421 27.5084L46.0452 35.9754H40.7765L43.9894 19.9025L37.6398 27.7135L40.7694 35.9754H34.9412ZM41.3196 25.5748L40.325 30.5505L39.3555 27.991L41.3196 25.5748ZM119.549 38.8071L119.321 39.9493H117.077L117.308 38.7849C115.947 38.6847 114.866 38.3646 114.065 37.8246C113.091 37.1516 112.604 36.1822 112.604 34.9164C112.604 33.8315 112.89 32.8872 113.462 32.0836C114.034 31.2699 114.863 30.642 115.947 30.2C116.863 29.83 117.927 29.6149 119.138 29.5546L119.351 28.4822H121.61L121.393 29.5671C122.757 29.6641 123.838 29.9956 124.637 30.5616C125.611 31.2347 126.098 32.2041 126.098 33.4699C126.098 34.5749 125.807 35.5292 125.225 36.3329C124.652 37.1265 123.829 37.7393 122.755 38.1712C121.836 38.5442 120.767 38.7561 119.549 38.8071ZM118.756 31.4817L117.684 36.8877C116.922 36.8107 116.328 36.6408 115.902 36.3781C115.31 35.9963 115.013 35.3986 115.013 34.5849C115.013 33.8918 115.189 33.3141 115.54 32.852C115.892 32.3899 116.424 32.0383 117.137 31.7973C117.602 31.6422 118.142 31.537 118.756 31.4817ZM121.013 31.4747C121.791 31.5484 122.392 31.7262 122.815 32.0082C123.397 32.3799 123.688 32.9776 123.688 33.8014C123.688 34.4744 123.513 35.047 123.161 35.5192C122.81 35.9813 122.283 36.3329 121.58 36.574C121.11 36.7373 120.56 36.8453 119.93 36.898L121.013 31.4747ZM132.258 39.663C131.194 39.663 130.275 39.4721 129.502 39.0904C128.739 38.6986 128.152 38.1612 127.74 37.4781C127.328 36.7849 127.122 35.9863 127.122 35.0822C127.122 34.1781 127.278 33.3443 127.589 32.5808C127.9 31.8073 128.342 31.1393 128.915 30.5767C129.497 30.0041 130.185 29.5571 130.978 29.2356C131.781 28.9142 132.67 28.7534 133.644 28.7534C134.708 28.7534 135.622 28.9493 136.385 29.3411C137.158 29.7228 137.75 30.2603 138.162 30.9534C138.573 31.6365 138.779 32.4301 138.779 33.3342C138.779 34.2384 138.624 35.0772 138.312 35.8507C138.001 36.6142 137.554 37.2822 136.972 37.8548C136.4 38.4174 135.712 38.8594 134.909 39.1808C134.116 39.5023 133.232 39.663 132.258 39.663ZM132.469 37.5836C133.061 37.5836 133.593 37.4781 134.065 37.2671C134.547 37.0461 134.954 36.7448 135.285 36.363C135.617 35.9813 135.868 35.5443 136.038 35.0521C136.219 34.5498 136.309 34.0224 136.309 33.4699C136.309 32.9475 136.199 32.4904 135.978 32.0986C135.757 31.6968 135.431 31.3854 134.999 31.1644C134.577 30.9434 134.055 30.8329 133.433 30.8329C132.84 30.8329 132.308 30.9434 131.836 31.1644C131.364 31.3753 130.958 31.6717 130.616 32.0534C130.285 32.4352 130.029 32.8772 129.848 33.3795C129.678 33.8717 129.592 34.3941 129.592 34.9466C129.592 35.469 129.703 35.9311 129.924 36.3329C130.155 36.7247 130.481 37.0311 130.903 37.2521C131.334 37.4731 131.856 37.5836 132.469 37.5836ZM141.636 28.9342L139.527 39.4822H141.982L142.559 36.574H144.904C145.958 36.574 146.867 36.3982 147.63 36.0466C148.403 35.695 148.995 35.1927 149.407 34.5397C149.819 33.8767 150.024 33.1032 150.024 32.2192C150.024 31.1845 149.663 30.3808 148.94 29.8082C148.227 29.2256 147.213 28.9342 145.898 28.9342H141.636ZM142.953 34.5849H145.009C145.812 34.5849 146.435 34.4041 146.877 34.0425C147.329 33.6708 147.555 33.1333 147.555 32.4301C147.555 31.9178 147.384 31.5411 147.042 31.3C146.701 31.0489 146.219 30.9233 145.597 30.9233H143.686L142.953 34.5849ZM150.486 39.4822L152.595 28.9342H154.583L157.218 35.5067L162.354 28.9342H164.447L162.354 39.4822H160.08L161.326 33.1925L157.293 38.3671H156.194L154.025 33.1272L152.76 39.4822H150.486ZM170.59 28.9342L163.783 39.4822H166.389L167.766 37.2219H172.67L173.166 39.4822H175.606L173.015 28.9342H170.59ZM172.264 35.3685L171.373 31.303L168.895 35.3685H172.264ZM177.019 39.4822L179.127 28.9342H181.537L179.82 37.4931H184.534L186.236 28.9342H188.661L186.95 37.4931H188.465L187.621 41.7123H185.362L185.782 39.4822H184.127H177.019ZM191.791 28.9342L189.682 39.4822H192.001L198.417 32.626L197.002 39.4822H199.411L201.52 28.9342H199.2L192.8 35.8055L194.2 28.9342H191.791ZM204.16 28.9342L202.051 39.4822H204.371L210.786 32.626L209.371 39.4822H211.78L213.889 28.9342H211.57L205.169 35.8055L206.569 28.9342H204.16ZM109.42 28.9342H111.86L109.752 39.4822H107.312L108.176 35.1575H103.402L102.537 39.4822H100.083L102.191 28.9342H104.646L103.815 33.0931H108.589L109.42 28.9342ZM89.8369 28.9342L87.7284 39.4822H90.0477L96.4636 32.626L95.0479 39.4822H97.4576L99.5661 28.9342H97.2467L90.8459 35.8055L92.2466 28.9342H89.8369ZM103.405 26.2822C104.178 26.6639 105.096 26.8548 106.161 26.8548C107.135 26.8548 108.018 26.6941 108.811 26.3726C109.615 26.0511 110.302 25.6091 110.875 25.0466C111.457 24.474 111.904 23.8059 112.215 23.0425C112.526 22.2689 112.682 21.4301 112.682 20.526C112.682 19.6219 112.476 18.8283 112.065 18.1452C111.653 17.4521 111.06 16.9146 110.287 16.5329C109.524 16.1411 108.611 15.9452 107.546 15.9452C106.572 15.9452 105.684 16.1059 104.881 16.4274C104.087 16.7489 103.4 17.1959 102.817 17.7685C102.245 18.3311 101.803 18.9991 101.492 19.7726C101.181 20.5361 101.025 21.3699 101.025 22.274C101.025 23.1781 101.231 23.9767 101.643 24.6699C102.054 25.353 102.642 25.8904 103.405 26.2822ZM107.968 24.4589C107.496 24.6699 106.964 24.7753 106.372 24.7753C105.759 24.7753 105.237 24.6648 104.805 24.4438C104.384 24.2228 104.057 23.9164 103.826 23.5247C103.605 23.1228 103.495 22.6607 103.495 22.1384C103.495 21.5858 103.58 21.0635 103.751 20.5712C103.932 20.069 104.188 19.6269 104.519 19.2452C104.86 18.8635 105.267 18.5671 105.739 18.3562C106.211 18.1352 106.743 18.0247 107.335 18.0247C107.958 18.0247 108.48 18.1352 108.902 18.3562C109.334 18.5772 109.66 18.8886 109.881 19.2904C110.102 19.6822 110.212 20.1393 110.212 20.6616C110.212 21.2142 110.122 21.7416 109.941 22.2438C109.77 22.7361 109.519 23.1731 109.188 23.5548C108.857 23.9365 108.45 24.2379 107.968 24.4589ZM113.505 26.674L115.614 16.126H117.602L120.237 22.6984L125.373 16.126H127.466L125.373 26.674H123.099L124.345 20.3843L120.312 25.5589H119.213L117.044 20.319L115.779 26.674H113.505ZM130.115 16.126L128.007 26.674H130.326L136.742 19.8178L135.326 26.674H137.736L139.845 16.126H137.525L131.124 22.9973L132.525 16.126H130.115ZM142.635 26.674L144.318 18.1151H140.994L141.385 16.126H150.527L150.135 18.1151H146.727L145.045 26.674H142.635ZM153.255 22.274L152.767 24.7151H158.52L158.113 26.674H149.95L152.059 16.126H160.026L159.619 18.0849H154.092L153.634 20.3753H158.535L158.158 22.274H153.255ZM164.041 18.1151L162.358 26.674H164.768L166.45 18.1151H169.858L170.25 16.126H161.108L160.717 18.1151H164.041ZM89.9875 26.674L92.096 16.126H94.5358L93.6834 20.3904H95.2913L98.9184 16.126H101.659L97.1193 21.2873L99.5962 26.674H96.9756L95.0715 22.4096H93.2797L92.4273 26.674H89.9875Z"/>
                </svg>
              </a>
            </div>
            <div className="col-span-4 flex justify-center mt-[3px]">
              <ul className="header__menu flex text-center justify-between items-center w-[419px] pl-[29px] pr-[26px] py-2.5 rounded-[25px] z-10 shadow-boxShadow fixed max-[900px]:mt-[-8px]">
                <li>
                  <a
                      className="text-white text-[15px] font-medium leading-[150%]"
                      href="/about-us"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <img className="" src={HeaderDot} alt="." />
                </li>
                <li>
                  <a
                      className="text-white text-[15px] font-medium leading-[150%] tracking-[.7px]"
                      href="/services"
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <img className="" src={HeaderMenuLine} alt="|" />
                </li>
                <li>
                  <a
                      className="text-white  text-[15px] font-medium leading-[150%]"
                      href="/news"
                  >
                    Блог
                  </a>
                </li>
                <li>
                  <img className="" src={HeaderDot} alt="." />
                </li>
                <li>
                  <a
                      className="text-white text-[15px] font-medium leading-[150%] tracking-[.7px]"
                      href="/contacts"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex justify-end"></div>
          </div>
        </div>
      </div>


      <div className="md:hidden container z-20 overflow-x-hidden flex flex-col">
        <div style={{background: isDarMenu || isOpen || scrollTop > 50 ? 'white' : ''}} className="header-adaptive h-[72px] w-full flex justify-between items-center fixed top-0 z-20 px-[17px]">
          <a href="/">
            <svg style={{fill: (isOpen || scrollTop > 50) || isDarMenu ? 'black' : 'white'}} className="header__adaptive_logo fill-white w-[138px]" width="214" height="56" viewBox="0 0 214 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.2921 9.72033C11.2448 11.0425 9.42491 12.4979 7.86418 14.0616H15.87C18.7628 9.63424 22.9905 6.00857 28.0435 3.62361C22.4353 4.95612 17.4157 7.05736 13.2921 9.72033ZM1.50607 28C1.50607 23.5302 3.28662 19.2876 6.4695 15.5685H14.9547C12.8566 19.2959 11.672 23.5176 11.672 28C11.672 32.3321 12.7785 36.4206 14.7467 40.0548H6.15337C3.16895 36.427 1.50607 32.3195 1.50607 28ZM7.49524 41.5616H15.6283C18.5249 46.1602 22.8479 49.9241 28.0435 52.3764C22.4353 51.0439 17.4157 48.9426 13.2921 46.2797C11.0813 44.852 9.13568 43.2688 7.49524 41.5616ZM25.7801 41.5616H17.436C21.2077 47.0812 27.215 51.2532 34.354 53.0392C30.6997 50.6067 27.7082 46.5338 25.7801 41.5616ZM41.4168 53.9687C35.5925 53.5894 30.3774 48.8312 27.4012 41.5616H41.4168V53.9687ZM42.9229 53.9687L42.9229 41.5616H56.9384C53.961 48.833 48.7469 53.5896 42.9229 53.9687ZM49.9852 53.0393C53.6403 50.6065 56.6323 46.533 58.5596 41.5616H66.9037C63.1319 47.0813 57.1245 51.2534 49.9852 53.0393ZM16.4818 40.0548H67.8579C69.9694 36.4452 71.1616 32.3414 71.1616 28C71.1616 23.5068 69.8846 19.2681 67.6331 15.5685H16.7066C14.4551 19.2681 13.1781 23.5068 13.1781 28C13.1781 32.3414 14.3703 36.4452 16.4818 40.0548ZM56.2962 52.3764C61.4917 49.9241 65.8148 46.1602 68.7114 41.5616H76.8445C75.2041 43.2688 73.2584 44.852 71.0476 46.2797C66.924 48.9426 61.9044 51.0439 56.2962 52.3764ZM69.593 40.0548H78.1864C81.1708 36.427 82.8337 32.3195 82.8337 28C82.8337 23.5302 81.0531 19.2876 77.8702 15.5685H69.385C71.4831 19.2959 72.6677 23.5176 72.6677 28C72.6677 32.3321 71.5612 36.4206 69.593 40.0548ZM68.4697 14.0616H76.4755C74.9148 12.4979 73.0949 11.0425 71.0476 9.72033C66.924 7.05735 61.9044 4.9561 56.2962 3.6236C61.3492 6.00856 65.5769 9.63423 68.4697 14.0616ZM58.4109 14.0616H66.6413C62.8565 8.72908 56.9611 4.70576 49.9852 2.96068C53.5476 5.3318 56.4801 9.26134 58.4109 14.0616ZM42.9229 2.03133C48.6457 2.40387 53.7796 7.003 56.7812 14.0616H42.9229V2.03133ZM41.4168 0.504284C30.1542 0.632515 19.943 3.63177 12.4754 8.4543C4.84935 13.3791 0 20.2723 0 28C0 35.7277 4.84935 42.6209 12.4754 47.5457C20.1064 52.4737 30.6023 55.4979 42.1576 55.5H42.1699C53.7299 55.5 64.2306 52.4755 71.8644 47.5457C79.4904 42.6209 84.3397 35.7277 84.3397 28C84.3397 20.2723 79.4904 13.3791 71.8644 8.4543C64.3967 3.63176 54.1855 0.632511 42.9229 0.504283V0.5H42.1805H42.1699H41.4168V0.504284ZM41.4168 2.03133L41.4168 14.0616H27.5585C30.5601 7.00302 35.6941 2.40389 41.4168 2.03133ZM34.3545 2.96066C30.7922 5.33178 27.8597 9.26133 25.9289 14.0616H17.6984C21.4832 8.72906 27.3786 4.70574 34.3545 2.96066ZM26.5028 18.1411L22.6366 37.4822H31.2102L32.1993 32.5344L33.8577 37.4822H46.7352L50.6723 32.9139L49.7163 37.4822H58.2136L62.0798 18.1411H54.3061L50.3486 22.7457L51.2969 18.1411H37.3459L34.2769 22.1408L35.0764 18.1411H26.5028ZM34.9412 35.9754L32.9631 30.0742H31.1552L29.9755 35.9754H24.4737L27.7375 19.6479H33.2393L32.0224 25.7357H33.4172L38.0884 19.6479H49.4489L47.7004 28.1382L54.9973 19.6479H60.2427L56.9789 35.9754H51.5704L53.3421 27.5084L46.0452 35.9754H40.7765L43.9894 19.9025L37.6398 27.7135L40.7694 35.9754H34.9412ZM41.3196 25.5748L40.325 30.5505L39.3555 27.991L41.3196 25.5748ZM119.549 38.8071L119.321 39.9493H117.077L117.308 38.7849C115.947 38.6847 114.866 38.3646 114.065 37.8246C113.091 37.1516 112.604 36.1822 112.604 34.9164C112.604 33.8315 112.89 32.8872 113.462 32.0836C114.034 31.2699 114.863 30.642 115.947 30.2C116.863 29.83 117.927 29.6149 119.138 29.5546L119.351 28.4822H121.61L121.393 29.5671C122.757 29.6641 123.838 29.9956 124.637 30.5616C125.611 31.2347 126.098 32.2041 126.098 33.4699C126.098 34.5749 125.807 35.5292 125.225 36.3329C124.652 37.1265 123.829 37.7393 122.755 38.1712C121.836 38.5442 120.767 38.7561 119.549 38.8071ZM118.756 31.4817L117.684 36.8877C116.922 36.8107 116.328 36.6408 115.902 36.3781C115.31 35.9963 115.013 35.3986 115.013 34.5849C115.013 33.8918 115.189 33.3141 115.54 32.852C115.892 32.3899 116.424 32.0383 117.137 31.7973C117.602 31.6422 118.142 31.537 118.756 31.4817ZM121.013 31.4747C121.791 31.5484 122.392 31.7262 122.815 32.0082C123.397 32.3799 123.688 32.9776 123.688 33.8014C123.688 34.4744 123.513 35.047 123.161 35.5192C122.81 35.9813 122.283 36.3329 121.58 36.574C121.11 36.7373 120.56 36.8453 119.93 36.898L121.013 31.4747ZM132.258 39.663C131.194 39.663 130.275 39.4721 129.502 39.0904C128.739 38.6986 128.152 38.1612 127.74 37.4781C127.328 36.7849 127.122 35.9863 127.122 35.0822C127.122 34.1781 127.278 33.3443 127.589 32.5808C127.9 31.8073 128.342 31.1393 128.915 30.5767C129.497 30.0041 130.185 29.5571 130.978 29.2356C131.781 28.9142 132.67 28.7534 133.644 28.7534C134.708 28.7534 135.622 28.9493 136.385 29.3411C137.158 29.7228 137.75 30.2603 138.162 30.9534C138.573 31.6365 138.779 32.4301 138.779 33.3342C138.779 34.2384 138.624 35.0772 138.312 35.8507C138.001 36.6142 137.554 37.2822 136.972 37.8548C136.4 38.4174 135.712 38.8594 134.909 39.1808C134.116 39.5023 133.232 39.663 132.258 39.663ZM132.469 37.5836C133.061 37.5836 133.593 37.4781 134.065 37.2671C134.547 37.0461 134.954 36.7448 135.285 36.363C135.617 35.9813 135.868 35.5443 136.038 35.0521C136.219 34.5498 136.309 34.0224 136.309 33.4699C136.309 32.9475 136.199 32.4904 135.978 32.0986C135.757 31.6968 135.431 31.3854 134.999 31.1644C134.577 30.9434 134.055 30.8329 133.433 30.8329C132.84 30.8329 132.308 30.9434 131.836 31.1644C131.364 31.3753 130.958 31.6717 130.616 32.0534C130.285 32.4352 130.029 32.8772 129.848 33.3795C129.678 33.8717 129.592 34.3941 129.592 34.9466C129.592 35.469 129.703 35.9311 129.924 36.3329C130.155 36.7247 130.481 37.0311 130.903 37.2521C131.334 37.4731 131.856 37.5836 132.469 37.5836ZM141.636 28.9342L139.527 39.4822H141.982L142.559 36.574H144.904C145.958 36.574 146.867 36.3982 147.63 36.0466C148.403 35.695 148.995 35.1927 149.407 34.5397C149.819 33.8767 150.024 33.1032 150.024 32.2192C150.024 31.1845 149.663 30.3808 148.94 29.8082C148.227 29.2256 147.213 28.9342 145.898 28.9342H141.636ZM142.953 34.5849H145.009C145.812 34.5849 146.435 34.4041 146.877 34.0425C147.329 33.6708 147.555 33.1333 147.555 32.4301C147.555 31.9178 147.384 31.5411 147.042 31.3C146.701 31.0489 146.219 30.9233 145.597 30.9233H143.686L142.953 34.5849ZM150.486 39.4822L152.595 28.9342H154.583L157.218 35.5067L162.354 28.9342H164.447L162.354 39.4822H160.08L161.326 33.1925L157.293 38.3671H156.194L154.025 33.1272L152.76 39.4822H150.486ZM170.59 28.9342L163.783 39.4822H166.389L167.766 37.2219H172.67L173.166 39.4822H175.606L173.015 28.9342H170.59ZM172.264 35.3685L171.373 31.303L168.895 35.3685H172.264ZM177.019 39.4822L179.127 28.9342H181.537L179.82 37.4931H184.534L186.236 28.9342H188.661L186.95 37.4931H188.465L187.621 41.7123H185.362L185.782 39.4822H184.127H177.019ZM191.791 28.9342L189.682 39.4822H192.001L198.417 32.626L197.002 39.4822H199.411L201.52 28.9342H199.2L192.8 35.8055L194.2 28.9342H191.791ZM204.16 28.9342L202.051 39.4822H204.371L210.786 32.626L209.371 39.4822H211.78L213.889 28.9342H211.57L205.169 35.8055L206.569 28.9342H204.16ZM109.42 28.9342H111.86L109.752 39.4822H107.312L108.176 35.1575H103.402L102.537 39.4822H100.083L102.191 28.9342H104.646L103.815 33.0931H108.589L109.42 28.9342ZM89.8369 28.9342L87.7284 39.4822H90.0477L96.4636 32.626L95.0479 39.4822H97.4576L99.5661 28.9342H97.2467L90.8459 35.8055L92.2466 28.9342H89.8369ZM103.405 26.2822C104.178 26.6639 105.096 26.8548 106.161 26.8548C107.135 26.8548 108.018 26.6941 108.811 26.3726C109.615 26.0511 110.302 25.6091 110.875 25.0466C111.457 24.474 111.904 23.8059 112.215 23.0425C112.526 22.2689 112.682 21.4301 112.682 20.526C112.682 19.6219 112.476 18.8283 112.065 18.1452C111.653 17.4521 111.06 16.9146 110.287 16.5329C109.524 16.1411 108.611 15.9452 107.546 15.9452C106.572 15.9452 105.684 16.1059 104.881 16.4274C104.087 16.7489 103.4 17.1959 102.817 17.7685C102.245 18.3311 101.803 18.9991 101.492 19.7726C101.181 20.5361 101.025 21.3699 101.025 22.274C101.025 23.1781 101.231 23.9767 101.643 24.6699C102.054 25.353 102.642 25.8904 103.405 26.2822ZM107.968 24.4589C107.496 24.6699 106.964 24.7753 106.372 24.7753C105.759 24.7753 105.237 24.6648 104.805 24.4438C104.384 24.2228 104.057 23.9164 103.826 23.5247C103.605 23.1228 103.495 22.6607 103.495 22.1384C103.495 21.5858 103.58 21.0635 103.751 20.5712C103.932 20.069 104.188 19.6269 104.519 19.2452C104.86 18.8635 105.267 18.5671 105.739 18.3562C106.211 18.1352 106.743 18.0247 107.335 18.0247C107.958 18.0247 108.48 18.1352 108.902 18.3562C109.334 18.5772 109.66 18.8886 109.881 19.2904C110.102 19.6822 110.212 20.1393 110.212 20.6616C110.212 21.2142 110.122 21.7416 109.941 22.2438C109.77 22.7361 109.519 23.1731 109.188 23.5548C108.857 23.9365 108.45 24.2379 107.968 24.4589ZM113.505 26.674L115.614 16.126H117.602L120.237 22.6984L125.373 16.126H127.466L125.373 26.674H123.099L124.345 20.3843L120.312 25.5589H119.213L117.044 20.319L115.779 26.674H113.505ZM130.115 16.126L128.007 26.674H130.326L136.742 19.8178L135.326 26.674H137.736L139.845 16.126H137.525L131.124 22.9973L132.525 16.126H130.115ZM142.635 26.674L144.318 18.1151H140.994L141.385 16.126H150.527L150.135 18.1151H146.727L145.045 26.674H142.635ZM153.255 22.274L152.767 24.7151H158.52L158.113 26.674H149.95L152.059 16.126H160.026L159.619 18.0849H154.092L153.634 20.3753H158.535L158.158 22.274H153.255ZM164.041 18.1151L162.358 26.674H164.768L166.45 18.1151H169.858L170.25 16.126H161.108L160.717 18.1151H164.041ZM89.9875 26.674L92.096 16.126H94.5358L93.6834 20.3904H95.2913L98.9184 16.126H101.659L97.1193 21.2873L99.5962 26.674H96.9756L95.0715 22.4096H93.2797L92.4273 26.674H89.9875Z"/>
            </svg>
          </a>
          <div>
            {isOpen ? <img onClick={toggleMenu} src={closeMenu} alt="Кнопка для меню"/>
                :<div onClick={toggleMenu} className="header__menu_btn flex flex-col gap-[5px] px-[10px] py-[15.5px] rounded-full bg-white/[.04]">
                  <div style={{backgroundColor:  scrollTop > 50 || isDarMenu ? 'black' : ''}} className="header__menu_btn_line h-[2px] w-[20px] bg-white"></div>
                  <div style={{backgroundColor:  scrollTop > 50 || isDarMenu ? 'black' : ''}} className="header__menu_btn_line h-[2px] w-[20px] bg-white"></div>
                </div>
            }
          </div>
        </div>
        {isOpen && (
            <div style={{
              position: 'fixed',
              top: '72px',
              right: 0,
              height: '100vh',
              width: '100%',
              background: 'white',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              padding: '0 16px',
            }}>
              <div className="h-[1px] bg-[#B3B3B3]"></div>
              <ul className="flex flex-col gap-[26px] pt-[36px] pb-[21px]">
                <li className="flex justify-between items-center">
                  <a
                      className="text-black text-[15px] font-medium leading-[154%]"
                      href="/about-us"
                  >
                    О нас
                  </a>
                  <img src={fourSvg} alt="Иконка" />
                </li>
                <li className="flex justify-between items-center">
                  <a
                      className="text-black text-[15px] font-medium leading-[154%]"
                      href="/services"
                  >
                    Услуги
                  </a>
                  <img src={fourSvg} alt="Иконка" />
                </li>
                <li className="flex justify-between items-center">
                  <a
                      className="text-black text-[15px] font-medium leading-[154%]"
                      href="/news"
                  >
                    Блог
                  </a>
                  <img src={fourSvg} alt="Иконка" />
                </li>
                <li className="flex justify-between items-center">
                  <a
                      className="text-black text-[15px] font-medium leading-[154%]"
                      href="/contacts"
                  >
                    Контакты
                  </a>
                  <img src={fourSvg} alt="Иконка" />
                </li>
              </ul>
              <div className="h-[1px]  bg-[#B3B3B3] mt-[13px]"></div>
              <div className="flex flex-col gap-4 mt-[35px]">
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[13px] leading-[145%] opacity-60">Тел.:</p>
                  <a
                      className="text-[16px] leading-[145%]"
                      href="tel:+74950883333"
                  >
                    +7 495 088-33-33
                  </a>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[13px] leading-[145%] opacity-60">Факс:</p>
                  <a
                      className="text-[16px] leading-[145%]"
                      href="tel:+74955325364"
                  >
                    +7 495 532-53-64
                  </a>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[13px] leading-[145%] opacity-60">
                    Эл. почта:
                  </p>
                  <a
                      href="mailto:info@ki112.ru"
                      className="text-[16px] leading-[145%]"
                  >
                    info@ki112.ru
                  </a>
                </div>
              </div>
            </div>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
