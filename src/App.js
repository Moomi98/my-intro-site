import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import GlobalStyle from "./styles/global";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Resume />
    </>
  );
}

export default App;
