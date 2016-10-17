// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import A from '../Common/A';
import Button from '../Common/Button';

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
