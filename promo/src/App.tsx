import React from 'react';
import About from './about/About';
import Chat from './chat/Chat';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Project from './project/Project';
import Burger from './burger/Burger';

function App() {
  return (
    <>
      <Burger />
      <Header />
      <Main />
      <Project />
      <About />
      <Chat />
      <Footer />
    </>
  );
}

export default App;
