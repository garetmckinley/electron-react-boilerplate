// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import A from './Common/A';
import Container from './Common/Container';

const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: -.025em;
  margin: 0;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Home</Title>
        <A to="/counter">to Counter</A>
      </Container>
    );
  }
}
