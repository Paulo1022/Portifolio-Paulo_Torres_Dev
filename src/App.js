import './App.css';
import Banner from './components/banner/banner';
import Division from './components/division/division';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

function App() {
  
  return (
    <>
      <Header />
      <Banner />
      <Division title="Projetos" />
      <Projects />
      <Division title="Skills" />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
