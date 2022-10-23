import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Tooltip from "./Tooltip";
import { skillDetails } from "../../constants/Skills";

const blink = keyframes`
  0% {
    box-shadow: none;
  }
  50%{
    box-shadow: 0px 0px 1px 2px #ffbd39;
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
  position: relative;
  width: 20px;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  animation: ${blink} 2s ease-in-out infinite;
`;

const ExpbarLayout = styled.div`
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
`;

const Expbar = ({ type, rate }) => {
  const [tooltip, setTooltip] = useState(false);
  const [tooltipCloseAnimation, setTooltipCloseAnimation] = useState(false);

  const tooltipOpen = () => {
    setTooltip(true);
    setTooltipCloseAnimation(false);
  };

  const tooltipClose = () => {
    setTooltipCloseAnimation(true);

    setTimeout(() => {
      setTooltip(false);
    }, 300);
  };

  const getExpRate = () => {
    const bars = [];
    let index = 0;

    for (let i = 0; i < rate; i += 5) {
      if (i === rate - 5) {
        bars.push(
          <div style={{ position: "relative", height: "100%" }}>
            <BlinkExpbarLayout
              onMouseEnter={tooltipOpen}
              onMouseLeave={tooltipClose}
              color={"#ffbd39"}
            />
            {tooltip ? (
              <Tooltip
                closeAnimation={tooltipCloseAnimation}
                contents={skillDetails[type]}
              />
            ) : null}
          </div>
        );
      } else {
        bars.push(<ExpbarLayout color={"#ffbd39"} />);
      }
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
