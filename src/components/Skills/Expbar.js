import styled from "styled-components";
import { useState } from "react";
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
  const getExpRate = () => {
    const bars = [];

    for (let i = 0; i < rate; i += 5) {
      bars.push(<ExpbarLayout color={"#ffbd39"} />);
    }

    for (let i = 0; i < 100 - rate; i += 5) {
      bars.push(<ExpbarLayout color={"#aaa"} />);
    }

    return bars;
  };
  return <Container>{getExpRate()}</Container>;
};
export default Expbar;
