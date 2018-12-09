import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  // Global State
  state = {
    reviews: [
      {
        id: 1,
        rating: "4",
        author: "Tom Jones",
        body: "Romeo and Juliet seem like they could of handled it better",
        publish_date: "3/6/16"
      },
      {
        id: 2,
        rating: "3",
        author: "Lis Smith",
        body: "Macbeth was okay",
        publish_date: "1/4/15"
      }
    ]
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
