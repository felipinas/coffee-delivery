import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import {
  Container,
  InfosContainer,
  InfosTitle,
  InfosDescription,
  Infos,
  Info,
  IconContainer,
  InfoDescription,
} from './styles';
import SuccessIllustration from '../../assets/success-illustration.svg';

export function Success() {
  const theme = useTheme();

  return (
    <Container>
      <InfosContainer>
        <InfosTitle>Uhu! Pedido confirmado</InfosTitle>

        <InfosDescription>
          Agora é só aguardar que logo o café chegará até você
        </InfosDescription>

        <Infos>
          <Info>
            <IconContainer iconBackground={theme.purple}>
              <MapPin size={16} weight="fill" />
            </IconContainer>

            <InfoDescription>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </p>

              <p>Farrapos - Porto Alegre, RS</p>
            </InfoDescription>
          </Info>

          <Info>
            <IconContainer iconBackground={theme.yellow}>
              <Timer size={16} weight="fill" />
            </IconContainer>

            <InfoDescription>
              <p>Previsão de entrega</p>

              <b>20min - 30min</b>
            </InfoDescription>
          </Info>

          <Info>
            <IconContainer iconBackground={theme['yellow-dark']}>
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>

            <InfoDescription>
              <p>Pagamento na entrega</p>

              <b>Cartão de Crédito</b>
            </InfoDescription>
          </Info>
        </Infos>
      </InfosContainer>

      <img src={SuccessIllustration} alt="" />
    </Container>
  );
}
