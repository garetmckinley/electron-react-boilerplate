import { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Button = styled(Link)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || 'white'};
  color: ${(props) => props.color || 'white'};
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => props.fontSize || '1em'};
  margin: 1em;
  padding: 0.25em 1em;
  text-decoration: none;
  transition: all .25s;

  &:hover {
    background-color: ${(props) => props.color || 'white'};
    color: rgba(0, 0, 0, 0.8);
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};

export default Button;
