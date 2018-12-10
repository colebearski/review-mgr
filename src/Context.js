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
        let sortReviews = res.data.sort((a, b) => {
          return a.publish_date < b.publish_date
            ? 1
            : b.publish_date < a.publish_date
            ? -1
            : 0;
        });

        this.setState({
          reviews: sortReviews
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
