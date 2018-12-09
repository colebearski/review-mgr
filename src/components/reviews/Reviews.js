import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
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
    const { reviews } = this.state;

    return (
      <div>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    );
  }
}

export default Reviews;
