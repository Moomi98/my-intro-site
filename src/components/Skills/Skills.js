import styled from "styled-components";
import Expbar from "./Expbar";

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
const Skills = () => {
  return (
    <Container>
      <TitleLayout>
        <Title>Skills</Title>
        <Subtitle>보유하고 있는 기술 스택입니다.</Subtitle>
      </TitleLayout>

      <SkillsetLayout>
        <SkillDetailLayout>
          <SkillName>Javascript</SkillName>
          <Expbar rate={80} />
        </SkillDetailLayout>
        <SkillDetailLayout>
          <SkillName>React</SkillName>
          <Expbar rate={70} />
        </SkillDetailLayout>
        <SkillDetailLayout>
          <SkillName>Typescript</SkillName>
          <Expbar rate={50} />
        </SkillDetailLayout>
        <SkillDetailLayout>
          <SkillName>Next.js</SkillName>
          <Expbar rate={20} />
        </SkillDetailLayout>
      </SkillsetLayout>
    </Container>
  );
};

export default Skills;
