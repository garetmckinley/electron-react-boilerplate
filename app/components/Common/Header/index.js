import React, { PropTypes } from 'react';
import styled from 'styled-components';

function Header({ ...props }) {
  const StyledHeader = styled.section`
    color: ${props.color || '#fff'};
    font-size: ${props.fontSize || 14}rem;
    font-weight: bold;
    letter-spacing: -.025em;
    margin: 0;
  `;
  return (
    <StyledHeader>{props.children}</StyledHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number
};

export default Header;
