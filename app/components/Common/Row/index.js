import { PropTypes } from 'react';
import styled from 'styled-components';

const Row = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;
