import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import Hero from '../components/Hero';
import Count from '../components/Count';
import GroupsSection from '../components/GroupsSection';
import InnerPages from '../components/InnerPages';
import Features from '../components/Features';
import Support from '../components/Support';
import EliteSection from '../components/EliteSection';

function Landing() {
  useEffect(() => {
    document.body.classList.add('index');
    return () => document.body.classList.remove('index');
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

export default Landing;
