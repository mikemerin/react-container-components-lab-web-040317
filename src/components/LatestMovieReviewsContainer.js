import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '3bcdb5b3aa1f4ffa84fb80eaa0a7c065';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL).then(x => x.json()).then(response => this.setState({ review: response.results }))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}
