/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Daniel Ramirez Gil",
  title: "Front-end Developer & Web Designer",
  email: "ramirezgil.daniel27@gmail.com",
  gitHub: "https://github.com/ramirezDg",
  instagram: "https://www.instagram.com/ramirezdg_27/",
  linkedIn: "https://www.linkedin.com/in/daniel-ramirez-gil-523087210/",
  medium: "",
  twitter: "https://twitter.com/ramirezDg27",
  youTube: "https://www.youtube.com/@danielramirezgil9802",
};

const primaryColor = "#1f1f1f";
const secondaryColor = "#333";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
