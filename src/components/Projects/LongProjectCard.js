import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import useScrollEvent from "../../hooks/useScrollEvent";
import ProjectModal from "../ProjectModal";
import useWindowSize from "../../hooks/useWindowSize";

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
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background-image: ${(props) => `url(${props.image})`};
  background-color: ${(props) => props.backgroundColor || "none"};
  position: relative;
  cursor: pointer;
`;

const ProjectDetailLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f98a;
  position: absolute;
  z-index: 10;
  opacity: 0.6;
  animation: ${hoverEnter} 0.2s linear forwards;
  cursor: pointer;
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

const LongProjectCard = (props) => {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);
  const scrollRef = useScrollEvent(0.2);
  const windowSize = useWindowSize();

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (windowSize && windowSize < 500) {
      setHover(true);
    }
  }, [windowSize]);

  return (
    <>
      <Container
        {...scrollRef}
        image={props.image}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() =>
          windowSize < 500 ? setHover(true) : setHover(false)
        }
      >
        {hover ? (
          <>
            <ProjectDetailLayout onClick={() => setModal(true)} />
            <ProjectTitle>Peachseoga</ProjectTitle>
          </>
        ) : null}
      </Container>
      {modal ? (
        <ProjectModal close={closeModal} content={props.content} />
      ) : null}
    </>
  );
};

export default LongProjectCard;
