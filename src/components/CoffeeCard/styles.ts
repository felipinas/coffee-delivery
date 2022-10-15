import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  padding: 0 1.25rem 1.25rem 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
  }

  footer {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 0.75rem;
`;

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;

  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  border-radius: 100px;
`;

export const CoffeeName = styled.h3`
  margin: 1rem 0 0.5rem 0;

  font-size: 1.25rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const CoffeeDescription = styled.p`
  margin-bottom: 2rem;

  text-align: center;
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-label']};
`;

export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};

  span {
    font-size: 0.875rem;
  }

  b {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const QuantityDefiner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  button {
    display: flex;
    align-items: center;

    border: none;
    background: transparent;

    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
