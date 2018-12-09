import React, { Component } from "react";
// Components
import Reviews from "./components/reviews/Reviews";
import Header from "./components/layouts/Header";
// Css
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Review Manager" />
        <div className="container">
          <Reviews />
          {/* <Review
            rating="4.1"
            author="John Doe"
            body="Romeo and Juliet, two thumbs up!"
            publish_date="3/9/16"
          />
          <Review
            rating="2.2"
            author="Jackie Chan"
            body="I just don't get it. Romeo and Juliet could of been a bit more grown up"
            publish_date="1/2/15"
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
