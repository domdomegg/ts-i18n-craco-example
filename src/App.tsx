import logo from './logo.svg';
import './App.css';
import t from './i18n/browser'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t.editAndSave()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.learnReact()}
        </a>
      </header>
    </div>
  );
}

export default App;
