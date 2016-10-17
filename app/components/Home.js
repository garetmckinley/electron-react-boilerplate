// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Container = styled.section`
  position: absolute;
  top: 30%;
  left: 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: -.025em;
  color: #fff;
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Home</Title>
        <StyledLink to="/counter">to Counter</StyledLink>
      </Container>
    );
  }
}
