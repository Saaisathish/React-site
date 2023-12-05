import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/NavBar/NavBar';
import HomeSection from './components/HomePage';
import AboutSection from './components/About';
import ContactUs from './components/Contact';
import ProjectSection from './components/ProjectSection/ProjectSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import './App.css'; // Your CSS file for animations


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar
          scrollToHome={() => scrollToRef(homeRef)}
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToProjects={() => scrollToRef(projectsRef)}
          scrollToSkills={() => scrollToRef(skillsRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
        <div className="section-container">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500} // Adjust timeout duration as needed
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <div ref={homeRef}>
                        <HomeSection />
                      </div>
                    </Route>
                    <Route path="/about">
                      <div ref={aboutRef}>
                        <AboutSection />
                      </div>
                    </Route>
                    <Route path="/projects">
                      <div ref={projectsRef}>
                        <ProjectSection />
                      </div>
                    </Route>
                    <Route path="/skills">
                      <div ref={skillsRef}>
                        <SkillsSection />
                      </div>
                    </Route>
                    <Route path="/contact">
                      <div ref={contactRef}>
                        <ContactUs />
                      </div>
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
