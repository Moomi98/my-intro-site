import { forwardRef } from "react";
import styled from "styled-components";
import useScrollEvent from "../hooks/useScrollEvent";
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
  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.p`
  color: #999999;
`;

const ResumeLayout = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 0px 2px 5px rgba(333, 123, 125);
  }
`;

const ResumeWrapperNotUpdated = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 5px;
`;

const Date = styled.p`
  font-weight: 900;
  font-size: 26px;
  color: #ffbd39;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const ResumeWrapH2 = styled.h2`
  font-size: 26px;
  color: white;
`;
const Position = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: white;
`;

const Content = styled.p`
  color: #999999;
`;

const Resume = forwardRef((props, ref) => {
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
      <Title {...scrollRef[0]}>Resume</Title>
      <Subtitle {...scrollRef[1]}>
        성장하는 개발자가 되기 위해 다양한 경험을 진행했습니다.
      </Subtitle>
      <ResumeLayout>
        <ResumeWrapper {...scrollRef[2]}>
          <Date>2023.01.30 ~ 2023.02.10</Date>
          <ResumeWrapH2>React Education Teacher</ResumeWrapH2>
          <Position>Elice</Position>
          <Content>
            온라인 교육 플랫폼 엘리스의 부트캠프에서 React 코치로
            참가하였습니다.
          </Content>
          <Content>사용 기술 : Javascript, React</Content>
        </ResumeWrapper>
        <ResumeWrapper {...scrollRef[3]}>
          <Date>2022.08.01 ~ 2022.08.26</Date>
          <ResumeWrapH2>Frontend Intern</ResumeWrapH2>
          <Position>Naver</Position>
          <Content>
            네이버 웨일의 프론트엔드 파트 인턴으로 4주간 참여하여 사아드바 앱
            구현을 진행했습니다.
          </Content>
          <Content>사용 기술 : Javascript, Vue, Vuex</Content>
        </ResumeWrapper>
        <ResumeWrapper {...scrollRef[4]}>
          <Date>2021.12.20 ~ 2022.02.16</Date>
          <ResumeWrapH2>Frontend Intern</ResumeWrapH2>
          <Position>Frigatebird</Position>
          <Content>
            전자책 구독 플랫폼 개발에 8주간 참여하여 프로필, 메인페이지 작업 및
            기능 개선을 진행했습니다.
          </Content>
          <Content>사용 기술 : Javascript, React, Redux</Content>
        </ResumeWrapper>
        <ResumeWrapperNotUpdated {...scrollRef[5]}>
          <ResumeWrapH2>To Be Updated...</ResumeWrapH2>
        </ResumeWrapperNotUpdated>
      </ResumeLayout>
    </Container>
  );
});

export default Resume;
