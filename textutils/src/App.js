import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

let name = "Mundane Editorial"  //variable name
function App() {  // Function-based component
  // return (  // Data inside return in JSX: JSX is HTML in the form of JavaScript
  //   <>
  //     <h1>This fragment example</h1>  {/* 1st element */}
  //     <div classNameName="App">  {/* 2nd element */}
  //       <header classNameName="App-header">
  //         <img src={logo} classNameName="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           classNameName="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   </>
  // );  // This returns only 1 element. If you need to return multiple elements, use JSX fragments instead
  return (
    <>
      <Navbar title="TextUtils" />
    </>
  );
}

export default App;
