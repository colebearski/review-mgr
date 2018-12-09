import React, { Component } from "react";
import PropTypes from "prop-types";

class Review extends Component {
  render() {
    const { rating, author, body, publish_date } = this.props.review;

    return (
      <div className="card card-body mb-3">
        <h4>Rating: {rating}</h4>
        <ul className="list-group">
          <li className="list-group-item">Author: {author}</li>
          <li className="list-group-item">Body: {body}</li>
          <li className="list-group-item">Publish Date: {publish_date}</li>
        </ul>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
