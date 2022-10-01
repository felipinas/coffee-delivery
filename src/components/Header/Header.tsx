import { ShoppingCart, MapPin } from 'phosphor-react';

import { HeaderContainer, InfoContainer, CartButton, Location } from './styles';
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg';

export function Header() {
  const CART_QUANTITY_MOCK = 4;

  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="Copo roxo de café com um foguete na embalagem do lado de um texto 'Coffee Delivery'."
      />

      <InfoContainer>
        <Location>
          <MapPin size={22} weight="fill" alt="Ícone de localização." />

          <span>Olinda, PE</span>
        </Location>

        <CartButton title="Ir para o carrinho.">
          {CART_QUANTITY_MOCK ? <span>{CART_QUANTITY_MOCK}</span> : null}

          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </InfoContainer>
    </HeaderContainer>
  );
}
