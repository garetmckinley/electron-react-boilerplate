import React, { PropTypes } from 'react';
import styled from 'styled-components';

import A from '../Common/A';
import Button from '../Common/Button';
import Column from '../Common/Column';
import Container from '../Common/Container';
import Row from '../Common/Row';

const BackButton = styled.div`
  position: absolute;
`;

const CounterLabel = styled.p`
  font-size: 10rem;
  font-weight: bold;
  letter-spacing: -.025em;
`;

function Counter(props) {
  const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props;
  return (
    <Container>
      <BackButton>
        <A to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </A>
      </BackButton>
      <CounterLabel className="counter">
        {counter}
      </CounterLabel>
      <Row>
        <Column>
          <Button onClick={increment}>
            <i className="fa fa-plus" />
          </Button>
        </Column>
        <Column>
          <Button onClick={decrement}>
            <i className="fa fa-minus" />
          </Button>
        </Column>
        <Column>
          <Button onClick={incrementIfOdd}>odd</Button>
        </Column>
        <Column>
          <Button onClick={() => incrementAsync()}>async</Button>
        </Column>
      </Row>
    </Container>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
