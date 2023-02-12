import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! my name is Pranjali and this is my first website.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="Main">
        <p>This is the main paragraph, which will contain a resume.</p>
      </section>
    </div>
    //<div className="header"></div>
  );
}

export default App;
