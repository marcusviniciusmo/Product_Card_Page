import ImageAnimated from '../../assets/product.gif';
import * as Styles from './styles';

export function Card() {
  return (
    <Styles.Image src={ImageAnimated} alt='Product animated' />
  );
};