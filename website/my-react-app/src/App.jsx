import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Cards.jsx'

function App() {
  return(
    <>
      <Header/>
      <Card/>
      <Card/>
      <Food/>
      <Footer/>
    </>
    
  );
}

export default App;