import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Count from './components/Count';
import GroupsSection from './components/GroupsSection';
import InnerPages from './components/InnerPages';
import Features from './components/Features';
import Support from './components/Support';
import EliteSection from './components/EliteSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  useEffect(() => {
    document.body.classList.add('index');
  }, []);

  return (
    <>
      <Cursor />
      <Header />
      <div className="wrapper">
        <main className="main">
          <Hero />
          <Count />
          <GroupsSection />
          <InnerPages />
          <Features />
          <Support />
          <EliteSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
