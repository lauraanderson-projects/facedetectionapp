import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParticlesBg type="cobweb" bg={false} />
      <Navigation />
      <Logo />
      <h1 className="f1 white">Face Detection App</h1>
      <Rank />
      <ImageLinkForm />

      {/*
      <FaceRecognition />*/}
    </>
  );
}

export default App;
