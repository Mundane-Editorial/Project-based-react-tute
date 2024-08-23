import logo from './logo.svg';
import './App.css';


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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
