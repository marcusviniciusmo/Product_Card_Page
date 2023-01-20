import { Product } from "components/Product";
import { ProductProps } from "types/Product";
import * as Styles from "./styles";

export function Home() {
  const product: ProductProps = {
    productInfo: {
      title: 'Sofá Margot II - Rosé',
      code: '42004',
      price: '4.000'
    }
  };

  return (
    <Styles.Container>
      <Product productInfo={product.productInfo} />
    </Styles.Container>
  );
};