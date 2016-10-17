import { Link } from 'react-router';
import styled from 'styled-components';

const A = styled(Link)`
  color: white;
  opacity: .75;
  text-decoration: none;
  &:hover {
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default A;
