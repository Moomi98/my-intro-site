import styled, { keyframes, css } from "styled-components";

const blink = keyframes`
  0% {
    box-shadow: none;
  }
  50%{
    box-shadow: 0px 0px 1px 2px rgb(255, 123, 125);
  }
  100%{
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 7px;
  height: 40px;
`;

const BlinkExpbarLayout = styled.div`
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  animation: ${blink} 2s ease-in-out infinite;
`;

const ExpbarLayout = styled.div`
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
`;

const Expbar = ({ rate }) => {
  const getExpRate = () => {
    const bars = [];
    let index = 0;

    for (let i = 0; i < rate; i += 5) {
      bars.push(
        i === rate - 5 ? (
          <BlinkExpbarLayout color={"#ffbd39"} />
        ) : (
          <ExpbarLayout color={"#ffbd39"} />
        )
      );
      index += 1;
    }

    for (let i = 0; i < 100 - rate; i += 5) {
      bars.push(<ExpbarLayout color={"#aaa"} />);
      index += 1;
    }

    return bars;
  };
  return <Container>{getExpRate()}</Container>;
};
export default Expbar;
