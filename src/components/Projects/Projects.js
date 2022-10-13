import styled from "styled-components";
import { projectImage1, projectImage2 } from "../../assets/images";
import ShortProjectCard from "./ShortProjectCard";
import LongProjectCard from "./LongProjectCard";
const Container = styled.section`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.p`
  color: #999999;
`;

const ProjectsLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  gap: 30px;
  height: 100%;
`;

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <Subtitle>진행했거나 진행 중인 프로젝트를 소개합니다.</Subtitle>
      <ProjectsLayout>
        <ShortProjectCard image={projectImage1} />
        <LongProjectCard image={projectImage2} />
      </ProjectsLayout>
    </Container>
  );
};

export default Projects;
