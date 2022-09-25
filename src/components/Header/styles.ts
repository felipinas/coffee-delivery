import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 2rem 10rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};

    border-radius: 6px;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border: none;
  border-radius: 6px;

  position: relative;

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

    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: 700;

    transform: translateY(-50%) translateX(50%);
  }
`;
