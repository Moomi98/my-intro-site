# My Web Portfolio

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

#### 배포용 웹사이트 : <a href="https://moomi98.github.io/my-intro-site/"><img src="https://img.shields.io/badge/Kodeal-4285F4?style=for-the-badge&logo=Google Chrome&logoColor=white"></a> (모바일 화면은 현재 최적화 진행 중 입니다.)

## 🎈 소개
저의 기본 정보 및 경험과 프로젝트 이력 등을 소개하는 웹 포트폴리오 사이트 입니다.

## 🛠 주요 기능

### Header Navigator

![Oct-27-2022 00-19-25](https://user-images.githubusercontent.com/76273383/198501386-e018fe28-63d2-4fc4-8c6c-c5f914d81a95.gif)

Header의 각 버튼 클릭 시 헤당 파트로 스크롤이 이동하도록 구현했습니다.

Custom Hook을 작성 하여 useRef로 각 컴포넌트를 등록 후 header의 각 button과 매핑하여 navigator를 구현했습니다.

```javascript
import { useRef } from "react";

const useMoveScroll = () => {
  const element = useRef(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
};

export default useMoveScroll;
```

### Scroll Animation

![Oct-28-2022 13-31-03](https://user-images.githubusercontent.com/76273383/198502950-43bd45b3-0d4d-415a-a47c-2aaa7e648d24.gif)

스크롤을 내릴 경우 각 컴포넌트가 서서히 떠오르는 애니매이션을 보이도록 구현했습니다.

무한 스크롤 기법에 많이 활용되는 `IntersectionObserver`를 이용해 ref로 등록된 컴포넌트를 관찰시킨 후, 해당 컴포넌트가 timing값 만큼 보여지게 되면 애니매이션이 실행되도록 구현했습니다.

```javascript
import { useRef, useCallback, useEffect } from "react";

const useScrollEvent = (timing) => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "1s";
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = "0s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: timing });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll, timing]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: "translate3d(0, 50%, 0)",
    },
  };
};

export default useScrollEvent;

```
