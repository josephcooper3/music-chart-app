import React, { Component } from 'react';

class ChartList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(result => result.json())
    .then(result => this.setState({data: result.feed.entry}))
  }

  render() {
    return "Hello!"
  }

}

export default ChartList;