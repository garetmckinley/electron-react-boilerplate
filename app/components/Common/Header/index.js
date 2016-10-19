import { PropTypes } from 'react';
import styled from 'styled-components';

const Header = styled.section`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.fontSize || 14}rem;
  font-weight: bold;
  letter-spacing: -.025em;
  margin: 0;
`;

Header.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number
};

export default Header;
