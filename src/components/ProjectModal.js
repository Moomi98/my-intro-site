import styled, { css, keyframes } from "styled-components";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const fadeIn = keyframes`
	0% {
		background: transparent;
	}
	100% {
		background: rgba(0, 0, 0, .7);
	}
`;
const fadeOut = keyframes`
	0% {
		background: rgba(0, 0, 0, .7);
	}
	100% {
		background: transparent;
	}
`;

const scaleUp = keyframes`
	0% {
		transform: scale(.8) translateY(1000px);
		opacity: 0;
	}
	100% {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
`;

const scaleBack = keyframes`
	0% {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
	100% {
		transform: scale(.8) translateY(1000px);
		opacity: 0;
	}
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  animation: ${(props) =>
    css`
      ${props.animation ? fadeOut : fadeIn} 0.5s
        cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    `};
`;

const ProjectDetailLayout = styled.div`
  width: 50%;
  height: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: #f5f2f0;
  z-index: 10000;
  text-align: left;

  animation: ${(props) =>
    css`
      ${props.animation
        ? scaleBack
        : scaleUp} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
    `};
`;

const ProjectName = styled.h2`
  font-weight: bold;
  font-size: 40px;
`;

const ProjectModal = (props) => {
  const [closeAnimation, setCloseAnimation] = useState(false);

  useEffect(() => {
    if (closeAnimation) {
      setTimeout(() => props.close(), 500);
    }
  }, [closeAnimation]);

  return (
    <Container animation={closeAnimation}>
      <ProjectDetailLayout animation={closeAnimation}>
        <IoChevronBackOutline
          style={{ cursor: "pointer" }}
          size={30}
          onClick={() => {
            setCloseAnimation(true);
          }}
        />
        <ProjectName>{props.name}</ProjectName>
      </ProjectDetailLayout>
    </Container>
  );
};

export default ProjectModal;
