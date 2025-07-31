import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Register from "./components/Register/Register";

function App() {
  // State to manage input changes and button submissions
  const [input, setInput] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg?w=992"
  );
  const [box, setBox] = useState({
    topRow: 0,
    rightCol: 0,
    bottomRow: 0,
    leftCol: 0,
  });
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  const onButtonSubmit = () => {
    console.log("Detect button clicked");
  };

  // Render the application based on the current route
  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false); // User is signed in
    } else if (route === "home") {
      setIsSignedIn(true); // User is signed out
    }
    setRoute(route);
  };

  return (
    <>
      <Navigation ifSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <>
          <Logo />
          <h1 className="f1 white">Face Detection App</h1>
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition imageUrl={imageUrl} box={box} />
        </>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </>
  );
}

export default App;
