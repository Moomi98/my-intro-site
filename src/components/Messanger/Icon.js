import { AiFillMessage } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 70px;
  height: 70px;
  background-color: yellow;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dfdf00;
  }
`;

const Icon = () => {
  return (
    <Container>
      <AiFillMessage size={40} />
    </Container>
  );
};

export default Icon;
