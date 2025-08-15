import { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Title from "./components/Title/Title";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

// Get the API base URL from environment variables
const fetchUrl = import.meta.env.VITE_REQUEST_URL;

// Put this outside your App function
const initialUserState = {
  id: "",
  name: "",
  email: "",
  entries: 0,
  joined: "",
};

const initialBoxState = {
  topRow: 0,
  rightCol: 0,
  bottomRow: 0,
  leftCol: 0,
};

function App() {
  const [numParticles, setNumParticles] = useState(350);
  const [input, setInput] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [box, setBox] = useState(initialBoxState);
  const [route, setRoute] = useState("signin");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    const updateParticles = () => {
      if (window.innerWidth <= 600) {
        setNumParticles(150);
      } else {
        setNumParticles(350);
      }
    };

    updateParticles(); // set on mount
    window.addEventListener("resize", updateParticles);
    return () => window.removeEventListener("resize", updateParticles);
  }, []);

  // Load user data from the API
  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const resetAppState = () => {
    setInput(null);
    setImageUrl(null);
    setBox(initialBoxState);
    setButtonClicked(false);
    setIsSignedIn(false);
    setUser(initialUserState);
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.boundingBox;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box);
  };

  const onInputChange = (event) => {
    //console.log(event.target.value);
    setInput(event.target.value);
    setButtonClicked(false); // hide FaceRecognition until next submit
  };

  const onButtonSubmit = () => {
    setButtonClicked(true); //Flag to show FaceRecognition
    // 👇 Set imageUrl to the input value
    setImageUrl(input);

    // 👇 Call your backend to send image to Clarifai
    fetch(`${fetchUrl}/imageurl`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl: input,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.regions) {
          //Display boxes data
          displayFaceBox(calculateFaceLocation(data.regions[0]));
          // 👇 Call to increment user entry count
          fetch(`${fetchUrl}/image`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: user.id }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUser({ ...user, entries: count });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  // Render the application based on the current route
  const onRouteChange = (route) => {
    if (route === "signout") {
      resetAppState();
      setRoute("signin");
    } else if (route === "home") {
      setIsSignedIn(true);
      setRoute("home");
    } else if (route === "register") {
      resetAppState(); // Clear everything when going to register
      setRoute("register");
    } else {
      setRoute(route);
    }
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" num={numParticles} bg={true} />
      <Navigation ifSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      <Title />
      <div className="main-content">
        {route === "home" ? (
          <>
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            {buttonClicked && imageUrl && (
              <div className="face-recognition-wrapper">
                <FaceRecognition imageUrl={imageUrl} box={box} />
              </div>
            )}
          </>
        ) : route === "signin" ? (
          <SignIn
            hostRoute={fetchUrl}
            loadUser={loadUser}
            onRouteChange={onRouteChange}
          />
        ) : (
          <Register
            hostRoute={fetchUrl}
            loadUser={loadUser}
            onRouteChange={onRouteChange}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
