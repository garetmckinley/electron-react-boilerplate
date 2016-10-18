import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

function Button({ ...props }) {
  const StyledButton = styled(Link)`
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${props.color || 'white'};
    color: ${props.color || 'white'};
    cursor: pointer;
    display: inline-block;
    font-size: ${props.fontSize || '1em'};
    margin: 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    transition: all .25s;

    &:hover {
      background-color: ${props.color || 'white'};
      color: rgba(0, 0, 0, 0.8);
    }
  `;
  return (
    <StyledButton to={props.url} onClick={props.onClick}>{props.children}</StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string
};

export default Button;
