// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const A = styled(Link)`
  color: white;
  opacity: .75;
  text-decoration: none;
  &:hover {
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Container = styled.section`
  position: absolute;
  top: 30%;
  left: 10px;
  text-align: center;
`;

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
