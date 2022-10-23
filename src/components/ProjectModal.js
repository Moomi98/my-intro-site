import styled, { css, keyframes } from "styled-components";
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
import { VscCircleFilled } from "react-icons/vsc";

const fadeIn = keyframes`
	0% {
		background: transparent;
	}
	100% {
		background: rgba(0, 0, 0, .7);
	}
`;
const fadeOut = keyframes`
	0% {
		background: rgba(0, 0, 0, .7);
	}
	100% {
		background: transparent;
	}
`;

const scaleUp = keyframes`
	0% {
		transform: scale(.8) translateY(1000px);
		opacity: 0;
	}
	100% {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
`;

const scaleBack = keyframes`
	0% {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
	100% {
		transform: scale(.8) translateY(1000px);
		opacity: 0;
	}
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  animation: ${(props) =>
    css`
      ${props.animation ? fadeOut : fadeIn} 0.5s
        cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    `};
`;

const ProjectDetailLayout = styled.div`
  width: 50%;
  height: 90%;
  padding: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: none;
  gap: 40px;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: #f5f2f0;
  z-index: 10000;
  text-align: left;
  overflow-y: scroll;

  animation: ${(props) =>
    css`
      ${props.animation
        ? scaleBack
        : scaleUp} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards
    `};
`;

const ContentDivideLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: left;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
`;

const Subtitle = styled.h4`
  font-weight: 600;
  color: #888;
`;

const ContentTypeLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentType = styled.p`
  width: 160px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

const FlexLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ContentText = styled.p`
  font-size: 16px;
  color: #333;
`;

const ContentLink = styled.a`
  font-size: 16px;
  color: #333;
`;

const backIconStyle = {
  position: "absolute",
  top: "5px",
  left: "10px",
  cursor: "pointer",
};

const ProjectModal = (props) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const content = props.content;

  useEffect(() => {
    if (closeAnimation) {
      setTimeout(() => props.close(), 500);
    }
  }, [closeAnimation]);

  const getMyDevelop = () => {
    const contents = [];

    for (let part in content.myDevelop) {
      const develops = [];
      develops.push(<ContentType>{part}</ContentType>);
      content.myDevelop[part].forEach((develop) => {
        develops.push(
          <FlexLayout>
            <VscCircleFilled size={10} />
            <ContentText>{develop}</ContentText>
          </FlexLayout>
        );
      });

      contents.push(develops);
    }

    return contents;
  };

  return (
    <Container animation={closeAnimation}>
      <ProjectDetailLayout animation={closeAnimation}>
        <ContentDivideLayout>
          <IoChevronBackOutline
            style={backIconStyle}
            size={30}
            onClick={() => {
              setCloseAnimation(true);
            }}
          />
          <Title>{content.title}</Title>
          <Subtitle>{content.subtitle}</Subtitle>
        </ContentDivideLayout>
        <ContentDivideLayout>
          <ContentTypeLayout>
            <ContentType>🗓 기간</ContentType>
            <ContentText>{content.period}</ContentText>
          </ContentTypeLayout>
          <ContentTypeLayout>
            <ContentType>👨‍👨‍👦‍👦 Team</ContentType>
            <ContentText>{content.teams}</ContentText>
          </ContentTypeLayout>
          <ContentTypeLayout>
            <ContentType>🐱 Github</ContentType>
            <ContentLink href={content.github}>{content.github}</ContentLink>
          </ContentTypeLayout>
        </ContentDivideLayout>

        <ContentDivideLayout>
          <ContentType>🖥 개발 부분</ContentType>
          {getMyDevelop()}
        </ContentDivideLayout>
      </ProjectDetailLayout>
    </Container>
  );
};

export default ProjectModal;
