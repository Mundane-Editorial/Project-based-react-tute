import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

let name = "Mundane Editorial"  //variable name
function App() {  // Function-based component

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000';
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#FFF';
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <TextForm heading="Enter statement to analyze"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
