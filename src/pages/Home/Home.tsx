import { useTheme } from 'styled-components';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import {
  MainContainer,
  IntroContainer,
  TitleContainer,
  ItemsContainer,
  Item,
  ItemIcon,
} from './styles';
import IntroImage from '../../assets/intro-image.svg';

export function Home() {
  const theme = useTheme();

  const items = [
    {
      icon: <ShoppingCart size={16} weight="fill" />,
      backgroundColor: theme['yellow-dark'],
      text: 'Compra simples e segura',
    },
    {
      icon: <Package size={16} weight="fill" />,
      backgroundColor: theme['base-text'],
      text: 'Embalagem mantém o café intacto',
    },
    {
      icon: <Timer size={16} weight="fill" />,
      backgroundColor: theme.yellow,
      text: 'Entrega rápida e rastreada',
    },
    {
      icon: <Coffee size={16} weight="fill" />,
      backgroundColor: theme.purple,
      text: 'O café chega fresquinho até você',
    },
  ];

  return (
    <MainContainer>
      <IntroContainer>
        <div>
          <TitleContainer>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>

          <ItemsContainer>
            {items.map(({ text, backgroundColor, icon }) => {
              return (
                <Item key={text}>
                  <ItemIcon backgroundColor={backgroundColor}>{icon}</ItemIcon>
                  <span>{text}</span>
                </Item>
              );
            })}
          </ItemsContainer>
        </div>

        <img
          src={IntroImage}
          alt="Copo de café com grãos e pó de café ao redor"
        />
      </IntroContainer>
    </MainContainer>
  );
}
