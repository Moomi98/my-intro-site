import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import GlobalStyle from "./styles/global";
import Resume from "./components/Resume";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import useMoveScroll from "./hooks/useMoveScroll";
import StartCover from "./components/StartCover";
import { useState } from "react";

function App() {
  const scrollRefs = {
    0: useMoveScroll(),
    1: useMoveScroll(),
    2: useMoveScroll(),
    3: useMoveScroll(),
    4: useMoveScroll(),
    length: 5,
  };

  const [startAnimation, setStartAnimation] = useState(true);
  const [showPage, setShowPage] = useState(false);

  return (
    <>
      <GlobalStyle />
      {!showPage ? (
        <StartCover
          setStartAnimation={setStartAnimation}
          setShowPage={setShowPage}
        />
      ) : null}
      {startAnimation ? null : (
        <div style={{ height: "100%" }}>
          <Header
            scrollFunction={Array.from(scrollRefs).map(
              (ref) => ref.onMoveToElement
            )}
          />
          <Home ref={scrollRefs[0].element} />
          <About ref={scrollRefs[1].element} />
          <Skills ref={scrollRefs[2].element} />
          <Resume ref={scrollRefs[3].element} />
          <Projects ref={scrollRefs[4].element} />
        </div>
      )}
    </>
  );
}

export default App;
