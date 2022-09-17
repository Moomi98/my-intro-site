import styled from "styled-components";
import { homeImage1 } from "../assets/images/index";
const Container = styled.section`
  position: absolute;
  width: 100%;
  top: 72px;
`;

const HomeLayout = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const IntroLayout = styled.div`
  height: 75%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FlexTextLayout = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const H4Orange = styled.h4`
  font-size: 16px;
  letter-spacing: 2.3px;
  color: #ffbd39;
`;

const H1White = styled.h1`
  font-size: 60px;

  color: white;
  font-weight: bold;
`;

const H1Orange = styled.h1`
  font-size: 60px;
  color: #ffbd39;
  font-weight: bold;
`;

const ImageLayout = styled.img`
  width: 60%;
  height: 60%;
`;
const Home = () => {
  return (
    <Container>
      <HomeLayout>
        <IntroLayout>
          <H4Orange>안녕하세요!</H4Orange>
          <H1White>주니어 개발자</H1White>
          <FlexTextLayout>
            <H1Orange>김정현</H1Orange>
            <H1White>입니다.</H1White>
          </FlexTextLayout>
        </IntroLayout>
        <ImageLayout src={homeImage1} />
      </HomeLayout>
    </Container>
  );
};

export default Home;
