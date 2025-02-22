import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Admin from './student_dashboard'
// import Menu from './menu';

// import Academia from './academia';

function App() {
  const [showFirst, setShowFirst] = useState(false);

  
  function handleClick() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
     <Admin/>
       
      </React.StrictMode>
    );
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zahid's NEA Project
        </a>
        <button onClick={handleClick}>Click me</button>
      </header>
    


    </div>
  );
}

export default App;