import styled from 'styled-components';
import { Close } from '@mui/icons-material';

export const Container = styled.div`
  border: 0.1rem solid var(--color-primary);
  border-radius: 1rem;
  width: 87.5rem;
  height: 49.8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
`;

export const ImageContainer = styled.div`
  width: 44.9rem;
  height: 22.2rem;
  position: relative;
`;

export const Image = styled.img``;

export const Vector = styled.img`
  position: absolute;
  top: 3.8%;
  left: 81.51%;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 1rem;
  left: 36.6rem;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 28.1rem;
  height: 49.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: stretch;
  gap: 2rem;
`;

export const InfoContent = styled.div`
  color: var(--color-primary);
  width: 28.1rem;
  height: 8.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const Code = styled.span`
  font-family: 'Lato';
  font-size: 1rem;
  font-weight: 300;
`;

export const HeadingProductName = styled.div`
  width: 27.4rem;
  height: 3.2rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ProductName = styled.span`
  font-family: 'Crimson Pro';
  font-size: 3.2rem;
  font-weight: 600;
`;

export const HeadingProductPrice = styled.div`
  width: 28.1rem;
  height: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  opacity: 0.7;
`;

export const ProductPrice = styled.span`
  font-family: 'Lato';
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Button = styled.button`
  border-radius: 10rem;
  border: 0.05rem solid var(--color-primary);
  width: 14.8rem;
  height: 3.2rem;
  padding: 0.8rem 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-sizing: border-box;

  &:hover {
    background: var(--color-primary);
    color: #FFFFFF;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Lato';
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;