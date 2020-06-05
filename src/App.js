import React from 'react';
import './assets/main.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App flex flex-col min-h-screen">

    <Header headertitle="Articulos" />
    <Content />
    <Footer />
      
    </div>
  );
}

export default App;
