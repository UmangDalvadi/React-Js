// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';


function App() {
  const [mode, changemode] = useState('light')

  const modefun = () => {
    if (mode === 'light') {
      changemode('dark')
      document.body.style.backgroundColor = ' #071827 '
    }
    else {
      changemode('light')
      document.body.style.backgroundColor = 'white'

    }
  }


  return (
    < >

      <Navbar title="Textutils" mode={mode} modefun={modefun} />
      <Textarea mode={mode} />
    </>
  );
}

export default App;
