import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import styled from "styled-components";
import Messanger from "./Messanger";

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
  const [modal, setModal] = useState(false);
  return (
    <>
      <Container onClick={() => setModal(true)}>
        <AiFillMessage size={40} />
      </Container>
      {modal && <Messanger setModal={setModal} />}
    </>
  );
};

export default Icon;
