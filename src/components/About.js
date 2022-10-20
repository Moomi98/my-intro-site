import { forwardRef } from "react";
import styled from "styled-components";
import { homeImage1 } from "../assets/images/index";
import useScrollEvent from "../hooks/useScrollEvent";

const Container = styled.section`
  width: 75%;
  height: 100%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.p`
  color: #999999;
  width: 100%;
`;
const IntroLayout = styled.div`
  height: 62%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
`;
const TextLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 20px;
`;

const FlexTextLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ImageLayout = styled.img`
  width: 60%;
  height: 60%;
`;

const ContentText = styled.p`
  color: #999999;
  width: 80%;
`;
const ElementText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  min-width: 100px;
`;

const About = forwardRef((props, ref) => {
  const scrollRef = {
    0: useScrollEvent(0.2),
    1: useScrollEvent(0.2),
    2: useScrollEvent(0.2),
    3: useScrollEvent(0.2),
  };

  return (
    <Container ref={ref}>
      <ImageLayout src={homeImage1} {...scrollRef[0]} />
      <IntroLayout>
        <Title {...scrollRef[1]}>About Me</Title>
        <Subtitle {...scrollRef[2]}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </Subtitle>
        <TextLayout {...scrollRef[3]}>
          <FlexTextLayout>
            <ElementText>이름 :</ElementText>
            <ContentText>김정현</ContentText>
          </FlexTextLayout>
          <FlexTextLayout>
            <ElementText>생년월일 :</ElementText>
            <ContentText>1998.09.07</ContentText>
          </FlexTextLayout>
          <FlexTextLayout>
            <ElementText>Email :</ElementText>
            <ContentText>kymkjh2002@gmail.com</ContentText>
          </FlexTextLayout>
          <FlexTextLayout>
            <ElementText>학교 :</ElementText>
            <ContentText>한국공학대학교 컴퓨터공학과</ContentText>
          </FlexTextLayout>
        </TextLayout>
      </IntroLayout>
    </Container>
  );
});

export default About;
