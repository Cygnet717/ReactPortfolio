import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Header from './pages/Header';
import Footer from './pages/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route exact path="/AboutMe" element={<AboutMe/>}/>
          <Route exact path="/Projects" element={<Projects/>}/>
          <Route exact path="/Resume" element={<Resume/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
        <div style={{height: '50px'}}></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
