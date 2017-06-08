import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const SEARCHURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?"
 + `api-key=${NYT_API_KEY}` + "&query="

export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      reviews: [],
      searchTerm: "",

    }
  }

  handleChange(event){
    this.setState({
      searchTerm: (event.target.value)
    })
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(SEARCHURL + `${this.state.searchTerm}`).then(result => result.json()).then(reviews => this.setState({ reviews: reviews.results }))
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form>
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
          <button type="submit" onSubmit={this.handleSubmit}>Click Me!</button>
        </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>

    )
  }
}
