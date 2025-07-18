import React from "react"
import Header from "./components/Header/Header" 
import Hero from "./components/Hero/Hero"
import Logements from "./components/Logements/logements"
import Value from "./components/Value/Value"
import Contacts from "./components/Contacts/Contacts"
import Companies from "./components/Companies/Companies"
import GetStarted from "./components/GetStarted/GetStarted"
import Footer from "./components/Footer/Footer"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Logements/>
      <Value/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App
