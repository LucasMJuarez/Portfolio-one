import React from 'react';
import { Header } from './components/Header'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Works } from './components/Works'
import { Footer } from './components/Footer'
import { Resume } from './components/Resume'
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';



function App() {
  return (
    <div className="App container p-2">
      <Header />
      <About />
      <Resume />
      <Works />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
