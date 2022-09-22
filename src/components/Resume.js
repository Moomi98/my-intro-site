import styled from "styled-components";

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

const ResumeLayout = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 5px;
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

const Resume = () => {
  return (
    <Container>
      <Title>Resume</Title>
      <Subtitle>
        성장하는 개발자가 되기 위해 다양한 경험을 진행했습니다.
      </Subtitle>
      <ResumeLayout>
        <ResumeWrapper>
          <Date>2022.08.01 ~ 2022.08.26</Date>
          <ResumeWrapH2>Frontend Intern</ResumeWrapH2>
          <Position>Naver</Position>
          <Content>
            네이버 웨일의 프론트엔드 파트 인턴으로 4주간 참여하여 사아드바 앱
            구현을 진행했습니다.
          </Content>
          <Content>사용 기술 : Javascript, Vue, Vuex</Content>
        </ResumeWrapper>
        <ResumeWrapper>
          <Date>2021.12.20- ~ 2022.02.16</Date>
          <ResumeWrapH2>Frontend Intern</ResumeWrapH2>
          <Position>Frigatebird</Position>
          <Content>
            전자책 구독 플랫폼 개발에 8주간 참여하여 프로필, 메인페이지 작업 및
            기능 개선을 진행했습니다.
          </Content>
          <Content>사용 기술 : Javscript, React, Redux</Content>
        </ResumeWrapper>
        <ResumeWrapperNotUpdated>
          <ResumeWrapH2>To Be Updated...</ResumeWrapH2>
        </ResumeWrapperNotUpdated>
        <ResumeWrapperNotUpdated>
          <ResumeWrapH2>To Be Updated...</ResumeWrapH2>
        </ResumeWrapperNotUpdated>
      </ResumeLayout>
    </Container>
  );
};

export default Resume;
