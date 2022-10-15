import styled from 'styled-components';

interface ItemIconProps {
  backgroundColor: string;
}

export const MainContainer = styled.main`
  width: 90vw;
  max-width: 1120px;

  margin: auto;
  padding-bottom: 10rem;
`;

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  padding: 6rem 0;
`;

export const TitleContainer = styled.div`
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 1rem;

    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 1.25rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};
`;

export const ItemIcon = styled.div<ItemIconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${(props) => props.theme.white};
`;

export const CoffeeListTitle = styled.h2`
  margin: 2rem 0 3rem;

  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`;
