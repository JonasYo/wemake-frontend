import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const { mediaQuery } = GeneralStyles;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    padding: 28px 18px;
  }

  a {
    text-decoration: none;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    color: #131627;

    ${mediaQuery.mobileMediaQuery} {
      color: #fff;
    }

    &.active {
      text-decoration: none;
      color: #15cdfc;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #131627;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 350px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
