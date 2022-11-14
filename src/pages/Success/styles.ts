import styled from 'styled-components';

interface IconContainerProps {
  iconBackground: string;
}

export const Container = styled.main`
  width: 90vw;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: auto;
  padding: 5rem 0;
`;

export const InfosContainer = styled.section``;

export const InfosTitle = styled.h1`
  font-weight: 800;
  font-size: 2rem;

  color: ${(props) => props.theme['yellow-dark']};
`;

export const InfosDescription = styled.p`
  margin-bottom: 2.5rem;

  font-size: 1.25rem;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border-radius: 6px 36px;

  border: 1px solid ${(props) => props.theme.purple};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${(props) => props.iconBackground};

  svg {
    color: ${(props) => props.theme.white};
  }
`;

export const InfoDescription = styled.div`
  color: ${(props) => props.theme['base-text']};
`;
