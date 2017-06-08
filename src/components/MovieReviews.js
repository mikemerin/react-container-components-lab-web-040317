import React, { Component } from 'react';

  const  Review = ({ display_title, byline, headline, summary_short, publication_date, url }) => {
    return (
      <div className="review">
          <h3>{ display_title }</h3>
      </div>
    )
  }

  const MovieReviews = (props) => (
    <div className="review-list">
      {props.reviews.map(review => <Review display_title={review.display_title} />)}
    </div>
  )

    MovieReviews.defaultProps = {
      reviews: []
    }


export default MovieReviews;
