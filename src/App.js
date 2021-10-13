//Importing everything that will be needed
import "bootstrap/dist/css/bootstrap.min.css"
import AboutMe from "./components/AboutMe";
import WorkExp from "./components/WorkExp";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";

//Return everythin to user main screen
function App() {
  return (
    <div className="App">
     <AboutMe/>
     <WorkExp/>
     <Skills/>
     <Education/>
     <ContactMe/>
    </div>
  );
}

export default App;
