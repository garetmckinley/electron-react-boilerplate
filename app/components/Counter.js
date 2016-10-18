// @flow
import React, { Component, PropTypes } from 'react';
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

const BackButton = styled.div`
  position: absolute;
`;

const ButtonGroup = styled.div`
  margin: 0 auto;
  position: absolute;
  text-align: center;
  bottom: 20px;
  width: 100%;
`;

const Button = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  transition: all .25s;

  &:hover {
    background-color: white;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Container = styled.div`
`;

const CounterLabel = styled.div`
  font-size: 10rem;
  font-weight: bold;
  left: 45%;
  letter-spacing: -.025em;
  position: absolute;
  top: 30%;
`;

class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <Container>
        <BackButton>
          <A to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </A>
        </BackButton>
        <CounterLabel>
          {counter}
        </CounterLabel>
        <ButtonGroup>
          <Button onClick={increment}>
            <i className="fa fa-plus" />
          </Button>
          <Button onClick={decrement}>
            <i className="fa fa-minus" />
          </Button>
          <Button onClick={incrementIfOdd}>odd</Button>
          <Button onClick={() => incrementAsync()}>async</Button>
        </ButtonGroup>
      </Container>
    );
  }
}

export default Counter;
