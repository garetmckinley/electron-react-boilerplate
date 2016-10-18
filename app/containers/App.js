// @flow
/* eslint-disable no-unused-expressions */
import React, { Component, PropTypes } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    position: relative;
    color: white;
    height: 100vh;
    background-color: #232C39;
    background-image: linear-gradient(45deg, rgba(0, 216, 255, .5) 10%, rgba(0, 1, 127, .7));
    font-family: Arial, Helvetica, Helvetica Neue, serif;
    overflow-y: hidden;
  }
`;

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
