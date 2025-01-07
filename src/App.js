import { useContext } from 'react';
import './App.css';
import Banner from './components/banner/banner';
import Division from './components/division/division';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import { LanguageContext } from './contexts/languageContext';
import ModalContacts from './components/modalContacts/modalContacts';

function App() {
  
  const { languageEn } = useContext(LanguageContext);

  return (
    <>
      <ModalContacts />
      <Header />
      <Banner />
      <Division title={languageEn? "Projects" : "Projetos"} />
      <Projects />
      <Division title={languageEn? "Skills" : "Habilidades"} />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
