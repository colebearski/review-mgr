import React, { Component } from "react";
// Components
import Reviews from "./components/reviews/Reviews";
import Header from "./components/layouts/Header";
// Context
import { Provider } from "./Context";
// Css
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Review Manager" />
          <div className="container">
            <Reviews />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
