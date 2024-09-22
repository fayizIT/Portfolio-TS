import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import SocialLink from "./Components/SocialLink";
// import Skills from "./Components/Skills";
// import Contact from "./Components/Contact";
// import Works from "./Components/Works";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Skills />
      <Works />
      <Contact />
      <SocialLink /> */}
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
