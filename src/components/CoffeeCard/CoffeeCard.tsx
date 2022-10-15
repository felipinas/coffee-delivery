import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import {
  CoffeeCardContainer,
  Tags,
  Tag,
  CoffeeName,
  CoffeeDescription,
  Actions,
  QuantityDefiner,
  AddButton,
  Price,
} from './styles';

interface CoffeeData {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: CoffeeData;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const { image, tags, name, description, price } = coffee;

  function formatPrice(price: number) {
    const formatedPrice = price.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatedPrice;
  }

  function handleUpdateQuantity(value: number) {
    const supposedNewQuantityValue = quantity + value;
    const newQuantityValue =
      supposedNewQuantityValue > 0 ? supposedNewQuantityValue : 1;

    setQuantity(newQuantityValue);
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <CoffeeName>{name}</CoffeeName>

      <CoffeeDescription>{description}</CoffeeDescription>

      <footer>
        <Price>
          <span>R$</span> <b>{formatPrice(price)}</b>
        </Price>

        <Actions>
          <QuantityDefiner>
            <button onClick={() => handleUpdateQuantity(-1)}>
              <Minus size={14} color={theme.purple} />
            </button>

            <span>{quantity}</span>

            <button onClick={() => handleUpdateQuantity(1)}>
              <Plus size={14} color={theme.purple} />
            </button>
          </QuantityDefiner>

          <AddButton>
            <ShoppingCart size={22} weight="fill" />
          </AddButton>
        </Actions>
      </footer>
    </CoffeeCardContainer>
  );
}
