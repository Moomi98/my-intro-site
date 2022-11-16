import styled, { css, keyframes } from "styled-components";

const ToastAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  20%{
    opacity: 1;
        transform: translateY(10px);

  }
  80%{
    opacity: 1;
        transform: translateY(10px);

  }
  100%{
    opacity: 0;
        transform: translateY(0px);

  }
`;

const Container = styled.div`
  width: 300px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  right: 10px;
  background-color: #333;
  color: white;
  border-radius: 10px;
  text-align: center;
  animation: ${(props) =>
    css`
      ${ToastAnimation} ${props.duration}s linear forwards
    `};
`;

const Content = styled.p`
  color: white;
`;

const Toast = ({ content, duration }) => {
  return (
    <Container duration={duration}>
      <Content>{content}</Content>
    </Container>
  );
};

export default Toast;
