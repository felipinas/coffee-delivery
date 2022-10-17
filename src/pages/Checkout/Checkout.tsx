import { useState } from 'react';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react';

import {
  MainContainer,
  FormContainer,
  Side,
  SideTitle,
  AddressForm,
  InputsContainer,
  Input,
  PaymentForm,
  PaymentMethods,
  PaymentMethod,
  OrderDetail,
} from './styles';

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const payMethods = {
    CREDIT: {
      name: 'Cartão de crédito',
      icon: <CreditCard size={16} />,
    },
    DEBIT: {
      name: 'Cartão de débito',
      icon: <Bank size={16} />,
    },
    CASH: {
      name: 'Dinheiro',
      icon: <Money size={16} />,
    },
  };

  return (
    <MainContainer>
      <FormContainer>
        <Side>
          <SideTitle>Complete seu pedido</SideTitle>

          <AddressForm>
            <header>
              <MapPinLine size={22} />

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <InputsContainer>
              <Input placeholder="CEP" gridArea="cep" />

              <Input placeholder="Rua" gridArea="street" />

              <Input placeholder="Número" gridArea="number" />

              <Input placeholder="Complemento" gridArea="complement" />

              <Input placeholder="Bairro" gridArea="district" />

              <Input placeholder="Cidade" gridArea="city" />

              <Input placeholder="UF" gridArea="uf" />
            </InputsContainer>
          </AddressForm>

          <PaymentForm>
            <header>
              <CurrencyDollar size={22} />

              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <PaymentMethods>
              {Object.entries(payMethods).map(([key, value]) => (
                <PaymentMethod
                  key={key}
                  type="button"
                  isActive={selectedPaymentMethod === key}
                  onClick={() => setSelectedPaymentMethod(key)}
                >
                  {value.icon}
                  {value.name}
                </PaymentMethod>
              ))}
            </PaymentMethods>
          </PaymentForm>
        </Side>

        <Side>
          <SideTitle>Cafés selecionados</SideTitle>

          <OrderDetail></OrderDetail>
        </Side>
      </FormContainer>
    </MainContainer>
  );
}
