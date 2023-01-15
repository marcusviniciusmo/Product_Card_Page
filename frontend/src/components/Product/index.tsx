import { useState } from 'react';
import ImageProduct from '../../assets/product.svg';
import Vector from '../../assets/vector.svg';
import { Card } from "components/Card";
import * as Styles from "./styles";

export function Product() {
  const [showCard, setShowCard] = useState<boolean>(false);

  const toggleShowCard = () => setShowCard(!showCard);

  return (
    <Styles.Container>
      <Styles.ImageContainer>
        {
          showCard
            ? <Card />
            : <Styles.Image src={ImageProduct} />
        }
        {
          showCard
            ? <Styles.CloseIcon
              onClick={toggleShowCard}
              fontSize='large'
            />
            : <Styles.Vector src={Vector} onClick={toggleShowCard} />
        }
      </Styles.ImageContainer>

      <Styles.InfoContainer>
        <Styles.InfoContent>
          <Styles.Code>Código: 42004</Styles.Code>

          <Styles.HeadingProductName>
            <Styles.ProductName>
              Sofá Margot II - Rosé
            </Styles.ProductName>
          </Styles.HeadingProductName>

          <Styles.HeadingProductPrice>
            <Styles.ProductPrice>R$ 4.000</Styles.ProductPrice>
          </Styles.HeadingProductPrice>
        </Styles.InfoContent>

        <Styles.Button>
          <Styles.ButtonText>Adicionar à cesta</Styles.ButtonText>
        </Styles.Button>
      </Styles.InfoContainer>
    </Styles.Container>
  );
};