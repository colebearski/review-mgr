import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

class Review extends Component {
  state = {
    showReviewInfo: false
  };

  render() {
    const { rating, author, body, publish_date } = this.props.review;
    const { showReviewInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          Rating: {rating}{" "}
          <i
            onClick={() =>
              this.setState({ showReviewInfo: !this.state.showReviewInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>
        {showReviewInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Author: {author}</li>
            <li className="list-group-item">Review: {body}</li>

            <li className="list-group-item">
              Date: <Moment format="YYYY/MM/DD">{publish_date}</Moment>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
