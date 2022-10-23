import styled, { css, keyframes } from "styled-components";

const show = keyframes`
	from {
		transform: scale(.8) translateY(20px);
		opacity: 0;
	}
	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
`;

const hide = keyframes`
    0% {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
	100% {
		transform: scale(.8) translateY(20px);
		opacity: 0;
	}
`;

const Container = styled.div`
  width: 350px;
  background-color: rgba(40, 40, 40);
  margin-top: 10px;
  position: absolute;
  bottom: 60px;
  z-index: 12;
  opacity: 1;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 2px 5px rgba(0, 0, 0, 0.1);

  animation: ${(props) =>
    css`
      ${props.closeAnimation ? hide : show} 0.2s linear forwards
    `};
`;

const TooltipContent = styled.p`
  width: 100%;
  margin: 10px 0;
  color: white;
`;

const Tooltip = ({ closeAnimation, contents }) => {
  return (
    <Container closeAnimation={closeAnimation}>
      {contents.map((content) => (
        <TooltipContent>▪️ {content}</TooltipContent>
      ))}
    </Container>
  );
};

export default Tooltip;
