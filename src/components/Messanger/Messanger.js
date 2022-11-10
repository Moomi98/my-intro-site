import styled, { keyframes } from "styled-components";
import { robot } from "../../assets";

const Container = styled.aside`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: skyblue;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #70bbd9;
  }
`;

const IconLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Icon = styled.img`
  position: absolute;
  width: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Messanger = () => {
  return (
    <Container>
      <IconLayout>
        <Icon src={robot} />
      </IconLayout>
    </Container>
  );
};

export default Messanger;
