import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyHeader />
          <TheEntries />
        </a>
      </header>
    </div>
  );
}

function MyHeader() {
  return (
    <div>
      <h1> Titel</h1>
      <p> NEW ENTRY</p>
    </div>
  );
}

function TheEntries() {
  return (
    <div>
      <label htmlFor="myInput">Motto</label>
      <p></p>
      <input type="text" style={{ width: "20px" }} />
      <p></p>
      <label htmlFor="myInput">notes</label>
      <p></p>
      <input type="text" style={{ width: "90px" }} />
    </div>
  );
}

function ButtonCreate() {
  return (
    <>
      <button className="button" type="button">
        {" "}
        create
      </button>
    </>
  );
}

export default App;
