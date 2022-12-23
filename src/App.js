import "./App.css";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import SignInState from "./components/context/signInContext/SignInState";
import InputValueState from "./components/context/inputValueContext/InputValueState";
import { useWindowSize } from "react-use";
import VideoState from "./components/context/VideoContext/VideoState";
import MicValueState from "./components/context/micValueContext/MicValueState";
import Main from "./components/Main/Main";


function App() {
  const [isHeader, setIsHeader] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 1200) {
      setIsHeader(true)
    } else {
      setIsHeader(false)
    }
  }, [width])

  return (
    <SignInState>
      <InputValueState>
        <VideoState>
          <MicValueState>
            <Header isHeader={isHeader} setIsHeader={setIsHeader} />
            <Main isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </MicValueState>
        </VideoState>
      </InputValueState>
    </SignInState>
  );
}

export default App;