import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 90vw;
  max-width: 70rem;

  display: flex;
  justify-content: space-between;

  margin: auto;
  padding: 2rem 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CartButton = styled(Link)`
  display: flex;
  align-items: center;

  position: relative;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border: none;
  border-radius: 6px;

  cursor: pointer;

  span {
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;
    top: 0;

    padding: 0.5rem;

    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
    font-weight: 700;

    border-radius: 50%;

    transform: translateY(-50%) translateX(50%);
  }
`;
