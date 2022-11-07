import { forwardRef } from "react";
import styled from "styled-components";
import { emojiImage } from "../assets/index";
import useScrollEvent from "../hooks/useScrollEvent";
import { link } from "../constants/About";

const Container = styled.section`
  width: 75%;
  height: 100%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
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
  width: 50%;
  @media screen and (max-width: 500px) {
    display: none;
  }
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

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
`;

const LinkButton = styled.button`
  border-radius: 5px;
  padding: 10px 30px;
  color: white;
  background-color: transparent;
  border: 3px solid #ffbd39;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;

  &:hover {
    background-color: #ffbd39;
    color: black;
  }
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
      <ImageLayout src={emojiImage} {...scrollRef[0]} />
      <IntroLayout>
        <Title {...scrollRef[1]}>About Me</Title>
        <Subtitle {...scrollRef[2]}>
          새로운 것을 좋아하는 개발자, 김정현 입니다.
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
          <ButtonLayout>
            <a href={link.github} target="_blabk">
              <LinkButton>Github</LinkButton>
            </a>

            <a href={link.blog} target="_blank">
              <LinkButton>Blog</LinkButton>
            </a>
          </ButtonLayout>
        </TextLayout>
      </IntroLayout>
    </Container>
  );
});

export default About;
