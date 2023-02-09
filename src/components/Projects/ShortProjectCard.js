import { useEffect } from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import useScrollEvent from "../../hooks/useScrollEvent";
import useWindowSize from "../../hooks/useWindowSize";
import ProjectModal from "../ProjectModal";
const hoverEnter = keyframes`
    from{
        background-color: "transparent";
        opacity: 0;
    }
    to{
        background-color: "#f7f98a";
        opacity: 0.6;
    }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background-image: ${(props) => `url(${props.image})`};
`;

const ProjectDetailLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f98a;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  opacity: 0.6;
  animation: ${hoverEnter} 0.2s linear forwards;
`;

const ProjectTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: 700;
  color: white;
  z-index: 100;
`;

const ShortProjectCard = (props) => {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);
  const windowSize = useWindowSize();
  const scrollRef = useScrollEvent(0.2);

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (windowSize && windowSize < 500) {
      setHover(true);
    } else setHover(false);
  }, [windowSize]);

  return (
    <>
      <Container
        {...scrollRef}
        image={props.image}
        onClick={() => props.content && setModal(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() =>
          windowSize < 500 ? setHover(true) : setHover(false)
        }
      >
        {hover ? (
          <>
            <ProjectDetailLayout />
            <ProjectTitle>{props.content.title}</ProjectTitle>
          </>
        ) : null}
      </Container>
      {modal ? (
        <ProjectModal close={closeModal} content={props.content} />
      ) : null}
    </>
  );
};

export default ShortProjectCard;
