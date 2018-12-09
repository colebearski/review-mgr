import React, { Component } from "react";
import Review from "./Review";
// Consumer from Context
import { Consumer } from "../../Context";

class Reviews extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { reviews } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-info">Review</span> List
              </h1>
              {reviews.map(review => (
                <Review key={review.id} review={review} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Reviews;
