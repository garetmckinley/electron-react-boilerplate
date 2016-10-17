import styled from 'styled-components';

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

export default Button;
