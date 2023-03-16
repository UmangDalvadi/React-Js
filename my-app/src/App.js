// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <Navbar title='umang' home='uhome' /> */}
    <Navbar  home='uhome' search={false}/>
    </>
  );
}

export default App;
