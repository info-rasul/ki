import styled from "styled-components";
import { useLatestRef } from "../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, type FunctionComponent } from "react";
import React from "react";
import TopButton from '../assets/img/top-button.svg'

const AngleDoubleUpIcon = styled(FontAwesomeIcon).attrs({
})`
  display: block;
  color: #20232a;
  font-size: 1.3em;
  padding-left: 0.1rem;
  margin: 9px;
`;

const BackToTopLink = styled.a<{ show: boolean }>`
  width: 2.5rem;
  z-index: 9999;
  display: block;
  height: 2.5rem;
  right: 80px;
  cursor: pointer;
  position: fixed;
  user-select: none;
  border-radius: 50%;
  background-color: #093b45;
  -webkit-tap-highlight-color: transparent;
  transition:
    opacity 0.4s ease,
    bottom 0.4s ease;
  opacity: ${({ show }) => (show ? 1 : 0)};
  bottom: ${({ show }) => (show ? 3.9 : -3.5)}rem;
`;

// Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll event
const BackToTop: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);
  const showRef = useLatestRef<boolean>(show);

  useEffect(() => {
    const onScroll = () => {
      if (
        (!showRef.current && window.pageYOffset > 100) ||
        (showRef.current && window.pageYOffset === 0)
      ) {
        setShow((prevShow) => !prevShow);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showRef]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackToTopLink
      show={show}
      role="button"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <img src={TopButton} alt="TopButton"/>
    </BackToTopLink>
  );
};

export default BackToTop;
