// @flow
import React from 'react';

import A from '../Common/A';
import Button from '../Common/Button';
import Column from '../Common/Column';
import Container from '../Common/Container';
import Header from '../Common/Header';
import Row from '../Common/Row';

function Home() {
  return (
    <Container>
      <Header fontSize={3}>Home</Header>
      <A to="/counter">to Counter</A>
      <Row>
        <Column><Button url="/counter">Counter</Button></Column>
        <Column><Button>Settings</Button></Column>
      </Row>
    </Container>
  );
}

export default Home;
