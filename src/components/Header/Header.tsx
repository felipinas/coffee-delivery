import { ShoppingCart, MapPin } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { HeaderContainer, InfoContainer, CartButton, Location } from './styles';
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg';

export function Header() {
  const CART_QUANTITY_MOCK = 4;

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Copo roxo de café com um foguete na embalagem do lado de um texto 'Coffee Delivery'."
        />
      </Link>

      <InfoContainer>
        <Location>
          <MapPin size={22} weight="fill" alt="Ícone de localização." />

          <span>Olinda, PE</span>
        </Location>

        <CartButton to="/checkout" title="Ir para o carrinho.">
          {CART_QUANTITY_MOCK ? <span>{CART_QUANTITY_MOCK}</span> : null}

          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </InfoContainer>
    </HeaderContainer>
  );
}
