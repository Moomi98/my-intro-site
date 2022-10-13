import styled, { keyframes } from "styled-components";
import { useState } from "react";

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

const LongProjectCard = ({ image }) => {
  const [hover, setHover] = useState(false);

  return (
    <Container
      image={image}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? <ProjectDetailLayout /> : null}
    </Container>
  );
};

export default LongProjectCard;
