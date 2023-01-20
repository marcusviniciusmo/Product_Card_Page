import { useState } from 'react';
import ImageProduct from '../../assets/product.svg';
import Vector from '../../assets/vector.svg';
import { Card } from "components/Card";
import { ProductProps } from 'types/Product';
import * as Styles from "./styles";

export function Product(props: ProductProps) {
  const [showCard, setShowCard] = useState<boolean>(false);

  const toggleShowCard = () => setShowCard(!showCard);

  return (
    <Styles.Container>
      <Styles.ImageContainer>
        {
          showCard
          ? <Styles.CloseIcon
          onClick={toggleShowCard}
          fontSize='large'
          />
          : <Styles.Vector src={Vector} onClick={toggleShowCard} />
        }
        {
          showCard
            ? <Card />
            : <Styles.Image src={ImageProduct} />
        }
      </Styles.ImageContainer>

      <Styles.InfoContainer>
        <Styles.InfoContent>
          <Styles.Code>
            {`Código: ${props.productInfo.code}`}
          </Styles.Code>

          <Styles.HeadingProductName>
            <Styles.ProductName>
              {props.productInfo.title}
            </Styles.ProductName>
          </Styles.HeadingProductName>

          <Styles.HeadingProductPrice>
            <Styles.ProductPrice>
              {`R$ ${props.productInfo.price}`}
            </Styles.ProductPrice>
          </Styles.HeadingProductPrice>
        </Styles.InfoContent>

        <Styles.Button>
          <Styles.ButtonText>Adicionar à cesta</Styles.ButtonText>
        </Styles.Button>
      </Styles.InfoContainer>
    </Styles.Container>
  );
};