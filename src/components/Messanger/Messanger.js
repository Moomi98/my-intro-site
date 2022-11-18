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
  padding: 20px;
  animation: ${({ closeAnimation }) =>
    css`
      ${closeAnimation ? close : show} 0.2s linear forwards
    `};
`;

const FormLayout = styled.form`
  width: 100%;
  height: 100%;
  display: ${({ closeAnimation }) => (closeAnimation ? "none" : "flex")};
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const TextField = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 5px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border: 2px solid #ffbd39;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 18px;
  font-family: inherit;
  border: none;
  resize: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border: 2px solid #ffbd39;
  }
`;

const SendButton = styled.button`
  border-radius: 5px;
  padding: 10px 30px;
  color: black;
  background-color: #ffbd39;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #e6ab35;
  }
`;
const Messanger = ({ setModal }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const messngerRef = useRef();
  const closeModal = (e) => {
    if (e.keyCode === 27) {
      setCloseAnimation(true);
      setTimeout(() => {
        setModal(false);
      }, 200);
    }
  };

  const closeModalWithClick = (e) => {
    if (!e.path.includes(messngerRef.current)) {
      console.log(e, messngerRef.current.className);

      setCloseAnimation(true);
      setTimeout(() => {
        setModal(false);
      }, 200);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("keyup", closeModal);
      window.addEventListener("mousedown", closeModalWithClick);
    }, 300);

    return () => {
      window.removeEventListener("keyup", closeModal);
      window.removeEventListener("mousedown", closeModalWithClick);
    };
  }, []);
  return (
    <Container ref={messngerRef} closeAnimation={closeAnimation}>
      <FormLayout closeAnimation={closeAnimation}>
        <Title>발신자</Title>
        <TextField type="text" />
        <Title>내용</Title>
        <TextArea />
        <SendButton>전송</SendButton>
      </FormLayout>
    </Container>
  );
};

export default Messanger;
