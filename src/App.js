import './App.css';
import React, { Component } from 'react';

import QuoteText from './components/quote-text/quote-text.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      randomQuote: {},
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl =
      'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    fetch(proxyUrl + apiUrl).then(res =>
      res
        .json()
        .then(data => this.setState({ randomQuote: data, loading: false }))
    );
  }
  render() {
    const { randomQuote } = this.state;

    return (
      <div>
        <QuoteText
          loading={this.state.loading}
          {...randomQuote}
          handleChange={this.componentDidUpdate}
        />
      </div>
    );
  }
}
