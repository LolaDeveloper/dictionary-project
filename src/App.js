import logo from "./logo.gif";
import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col-4">
              <img src={logo} className="App-logo img-fluid " alt="logo" />
            </div>

            <div className="description mt-4 col-8">
              <span>Dictionary App by Lola</span>
              <br />
              <span className="text-muted">Use your words...</span>
            </div>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer ">
          <p>
            <small>
              😎This project was coded by{" "}
              <a
                href="https://lola-portfolio.netlify.app/"
                title="View source code"
                target="_blank"
                rel="noreferrer"
              >
                Funmilola
              </a>{" "}
              and is{" "}
              <a
                href="https://github.com/LolaDeveloper/dictionary-project"
                title="View source code"
                target="_blank"
                rel="noreferrer"
              >
                Open-sourced on GitHub
              </a>
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
}
