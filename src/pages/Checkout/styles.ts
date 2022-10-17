import styled from 'styled-components';

interface InputProps {
  gridArea: string;
}

interface PaymentMethodProps {
  isActive: boolean;
}

export const MainContainer = styled.main`
  width: 90vw;
  max-width: 1120px;

  margin: auto;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: auto 28rem;
  gap: 2rem;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SideTitle = styled.h2`
  font-size: 1.125rem;
`;

export const BoxBase = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
`;

export const FormBoxBase = styled(BoxBase)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    line-height: 130%;

    h3 {
      margin-bottom: 0.125rem;

      font-family: 'Roboto';
      font-weight: lighter;
      font-size: 1rem;

      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const AddressForm = styled(FormBoxBase)`
  header {
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 0.75rem;

  grid-template-columns: 1fr 2fr 60px;
  grid-template-areas:
    'cep      .          .'
    'street   street     street'
    'number   complement complement'
    'district city       uf';
`;

export const Input = styled.input<InputProps>`
  grid-area: ${(props) => props.gridArea};

  padding: 0.75rem;

  background-color: ${(props) => props.theme['base-input']};

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  outline: none;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const PaymentForm = styled(FormBoxBase)`
  header {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.75rem;
`;

export const PaymentMethod = styled.button<PaymentMethodProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};

  background-color: ${(props) =>
    props.isActive
      ? `${props.theme['purple-light']}`
      : `${props.theme['base-button']}`};

  border: solid 1px;
  border-color: ${(props) =>
    props.isActive ? `${props.theme.purple}` : `transparent`};
  border-radius: 6px;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) =>
      !props.isActive && props.theme['base-hover']};
  }
`;

export const OrderDetail = styled(BoxBase)`
  border-radius: 6px 44px;
`;
