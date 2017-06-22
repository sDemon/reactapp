import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getCurrnetPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  state = {
    route: getCurrnetPath()
  }

  handleLinkClick = (route) => {
    this.setState({ route });
    window.history.pushState(null, '', route)
  }

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  componentDidMount() {
    window.onpopstate = () => {
      this.setState({ route: getCurrnetPath() })
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
