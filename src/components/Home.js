import styled, { css } from "styled-components";
import { emojiVideo } from "../assets/index";
import { TypeAnimation } from "react-type-animation";
import { forwardRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  padding-top: 50px;
`;

const HomeLayout = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const IntroLayout = styled.div`
  width: 50%;
  height: 75%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const FlexTextLayout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const H4Orange = styled.h4`
  font-size: 16px;
  letter-spacing: 2.3px;
  color: #ffbd39;
`;

const H1White = styled.h1`
  font-size: ${(props) => (props.windowSize > 960 ? "3.5vw" : "10vw")};
  min-width: 120px;

  color: white;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 9vw;
  }
`;

const H1Orange = styled.h1`
  min-width: 120px;
  font-size: ${(props) => (props.windowSize > 960 ? "3.5vw" : "10vw")};
  color: #ffbd39;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 10vw;
  }
`;

const TypingAnimation = styled.div`
  > h1 {
    font-size: ${(props) => (props.windowSize > 960 ? "3.5vw" : "10vw")};
    font-weight: bold;
    color: white;
  }
`;

const Video = styled.video`
  width: ${(props) =>
    css`
      ${props.windowSize / 2 - 30}px
    `};

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;

const Home = forwardRef((props, ref) => {
  const windowSize = useWindowSize();

  return (
    <Container ref={ref}>
      <HomeLayout>
        <IntroLayout>
          <H4Orange>안녕하세요!</H4Orange>
          <TypingAnimation windowSize={windowSize}>
            <TypeAnimation
              sequence={[
                "주니어 개발자",
                3000,
                "프론트엔드 개발자",
                3000,
                () => {},
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
            />
          </TypingAnimation>

          <FlexTextLayout>
            <H1Orange windowSize={windowSize}>김정현</H1Orange>
            <H1White windowSize={windowSize}>입니다.</H1White>
          </FlexTextLayout>
        </IntroLayout>
        <Video muted autoPlay loop windowSize={windowSize}>
          <source src={emojiVideo} />
        </Video>
      </HomeLayout>
    </Container>
  );
});

export default Home;
