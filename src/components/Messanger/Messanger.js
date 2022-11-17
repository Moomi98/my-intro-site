import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const show = keyframes`
    from{
        width: 0;
        height: 0;
    }
    to{
        width: 480px;
        height: 640px;
    }
`;

const close = keyframes`
    from{
        width: 480px;
        height: 640px;
    }
    to{
        width: 0;
        height: 0;
    }
`;
const Container = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 480px;
  height: 640px;
  background-color: #333;
  border-radius: 15px;
  animation: ${({ closeAnimation }) =>
    css`
      ${closeAnimation ? close : show} 0.2s linear forwards
    `};
`;

const Messanger = ({ setModal }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const messngerRef = useRef();
  const closeModal = (e) => {
    if (e.keyCode === 27) {
      setCloseAnimation(true);
      setTimeout(() => {
        setModal(false);
      }, 300);
    }
  };

  const closeModalWithClick = (e) => {
    console.log(e.target, messngerRef);
    if (e.target !== messngerRef.current) {
      setCloseAnimation(true);
      setTimeout(() => {
        setModal(false);
      }, 300);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("keyup", closeModal);
      window.addEventListener("click", closeModalWithClick);
    }, 300);

    return () => {
      window.removeEventListener("keyup", closeModal);
      window.removeEventListener("click", closeModalWithClick);
    };
  }, []);
  return (
    <Container ref={messngerRef} closeAnimation={closeAnimation}></Container>
  );
};

export default Messanger;
