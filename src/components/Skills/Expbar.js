import styled, { keyframes } from "styled-components";
import useScrollEvent from "../../hooks/useScrollEvent";
const Container = styled.div`
  display: flex;
  gap: 7px;
  height: 40px;
`;

const ExpbarLayout = styled.div`
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
`;

const Expbar = ({ rate }) => {
  const barRefs = useScrollEvent();
  const getExpRate = () => {
    const bars = [];
    let index = 0;

    for (let i = 0; i < rate; i += 5) {
      bars.push(<ExpbarLayout color={"#ffbd39"} />);
      index += 1;
    }

    for (let i = 0; i < 100 - rate; i += 5) {
      bars.push(<ExpbarLayout color={"#aaa"} />);
      index += 1;
    }

    return bars;
  };
  return <Container {...barRefs}>{getExpRate()}</Container>;
};
export default Expbar;
