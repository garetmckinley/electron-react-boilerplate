import { PropTypes } from 'react';
import styled from 'styled-components';

const Column = styled.section`
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 1em 0 0 1em;
`;

Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default Column;
