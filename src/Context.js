import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  // Global State
  state = {
    reviews: []
  };

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    const URL = "https://shakespeare.podium.com/api/reviews";
    const config = {
      headers: { "x-api-key": "H3TM28wjL8R4#HTnqk?c" }
    };

    axios
      .get(URL, config)
      .then(res => {
        console.log("##### HIT", res);
        this.setState({
          reviews: res.data
        });
      })
      .catch(error => {
        console.log("***** ERROR", error);
      });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
