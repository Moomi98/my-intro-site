import styled from "styled-components";
import Expbar from "./Expbar";
import useScrollEvent from "../../hooks/useScrollEvent";
import { forwardRef } from "react";
const Container = styled.section`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const TitleLayout = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.p`
  color: #999999;
`;

const SkillsetLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SkillDetailLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SkillName = styled.p`
  min-width: 200px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-align: left;
  line-height: 40px;
`;
const Skills = forwardRef((props, ref) => {
  const scrollRef = {
    0: useScrollEvent(0.2),
    1: useScrollEvent(0.2),
    2: useScrollEvent(0.2),
    3: useScrollEvent(0.2),
    4: useScrollEvent(0.2),
    5: useScrollEvent(0.2),
  };
  return (
    <Container ref={ref}>
      <TitleLayout>
        <Title {...scrollRef[0]}>Skills</Title>
        <Subtitle {...scrollRef[1]}>보유하고 있는 기술 스택입니다.</Subtitle>
      </TitleLayout>

      <SkillsetLayout>
        <SkillDetailLayout {...scrollRef[2]}>
          <SkillName>Javascript</SkillName>
          <Expbar rate={80} type={"Javscript"} />
        </SkillDetailLayout>
        <SkillDetailLayout {...scrollRef[3]}>
          <SkillName>React</SkillName>
          <Expbar rate={70} type={"React"} />
        </SkillDetailLayout>
        <SkillDetailLayout {...scrollRef[4]}>
          <SkillName>Typescript</SkillName>
          <Expbar rate={50} type={"Typescript"} />
        </SkillDetailLayout>
        <SkillDetailLayout {...scrollRef[5]}>
          <SkillName>Next.js</SkillName>
          <Expbar rate={20} type={"Nextjs"} />
        </SkillDetailLayout>
      </SkillsetLayout>
    </Container>
  );
});

export default Skills;
