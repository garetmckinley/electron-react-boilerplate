import React, { PropTypes } from 'react';
import styled from 'styled-components';

function Row({ ...props }) {
  const StyledRow = styled.section`
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
  return (
    <StyledRow>{props.children}</StyledRow>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number
};

export default Row;
