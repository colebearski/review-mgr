import React, { Component } from "react";
import PropTypes from "prop-types";

class Review extends Component {
  render() {
    const { rating, author, body, publish_date } = this.props;

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
  rating: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  publish_date: PropTypes.string.isRequired
};

export default Review;
