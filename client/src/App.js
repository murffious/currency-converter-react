import React, { Component } from "react";
import "./App.css";
import ConverterContainer from "./containers/ConverterContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header clearfix">
          <h3 className="text-muted">Currency converter</h3>
        </header>
        <a href="/auth/google">Login with Google</a>
        <main>
          <ConverterContainer />
        </main>
        <footer className="footer">&copy; Paul Murff, 2018</footer>
      </div>
    );
  }
}

export default App;
