import { useState } from "react";
import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(-25%, -240px);
  }
  50% {
    opacity: 1;
    transform: translate(0, -240px);
  }

   100% {
    opacity: 0;
    transform: translate(25%, -240px);
  }
`;

const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(25%, -240px);
  }
  50% {
    opacity: 1;
    transform: translate(0, -240px);
  }
    100% {
    opacity: 0;
    transform: translate(-25%, -240px);
  }
`;

const lineRight = keyframes`
  0% { 
    opacity: 0;
    transform: translateX(-25%);
  }
  50% { 
    opacity: 1; 
    transform: translateX(0);
  }
    100% { 
    opacity: 0;
    transform: translateX(25%);
  }
`;

const slideOut = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    from{
        opacity: 0;
        letter-spacing: 10px;
    }
    to{
        opacity: 1;
        letter-spacing: 1px;
    }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  background-color: #222;
  z-index: 100;
  animation: ${slideOut} 3s ease-in-out forwards;
`;

const Upper = styled.div`
  width: 100%;
  height: 240px;
  top: 50%;
  left: 1%;
  position: absolute;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transform: translate(-25%, -240px);
  animation: ${slideRight} 3s ease-in-out forwards;
  z-index: 101;
`;

const Lower = styled.div`
  width: 100%;
  height: 240px;
  top: 50%;
  left: 1%;
  position: absolute;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 101;
`;

const UpperText = styled.div`
  font-size: 34.286em;
  font-weight: 700;
  line-height: 100%;
  height: 100%;
  width: 100%;
  color: rgba(0, 0, 0, 0.25);
  z-index: 101;
`;

const LowerText = styled.div`
  font-size: 34.286em;
  font-weight: 700;
  line-height: 100%;
  height: 100%;
  width: 100%;
  color: rgba(0, 0, 0, 0.25);
  opacity: 0;
  transform: translate(25%, -240px);
  animation: ${slideLeft} 3s ease-in-out forwards;
  z-index: 1101;
`;

const Divider = styled.div`
  opacity: 0;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  animation: ${lineRight} 3s ease-in-out forwards;
  z-index: 101;
`;

const StartCover = ({ setStartAnimation }) => {
  const [showText, setShowText] = useState(false);
  useState(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1500);
    setTimeout(() => {
      setStartAnimation(false);
    }, 2000);
  }, []);
  return (
    <>
      <Container>
        <Upper>
          <UpperText>Hello</UpperText>
        </Upper>
        <Lower>
          <LowerText>Hello</LowerText>
        </Lower>
      </Container>
      <Divider />
    </>
  );
};

export default StartCover;
