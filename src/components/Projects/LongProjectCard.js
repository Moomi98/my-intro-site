import styled, { keyframes } from "styled-components";
import { useState } from "react";
import useScrollEvent from "../../hooks/useScrollEvent";

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
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background-image: ${(props) => `url(${props.image})`};
  background-color: ${(props) => props.backgroundColor || "none"};
  position: relative;
`;

const ProjectDetailLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f98a;
  position: absolute;
  z-index: 10;
  opacity: 0.6;
  animation: ${hoverEnter} 0.2s linear forwards;
`;

const ProjectTitle = styled.p`
  position: absolute;
  top: 45%;
  left: 40%;
  font-size: 25px;
  font-weight: 700;
  color: white;
  z-index: 100;
`;

const LongProjectCard = ({ image }) => {
  const [hover, setHover] = useState(false);
  const scrollRef = useScrollEvent(0.2);

  return (
    <Container
      {...scrollRef}
      image={image}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <>
          <ProjectDetailLayout />
          <ProjectTitle>Peachseoga</ProjectTitle>
        </>
      ) : null}
    </Container>
  );
};

export default LongProjectCard;
