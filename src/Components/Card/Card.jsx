import { Link } from 'react-router-dom';
import * as S from './Card.styled';
import { getTime } from '../../helpers/time';
import { formatPrice } from '../../helpers/price';

export const Card = ({ product }) => {
  const timeResult = getTime(product.created_on)
  return (
    <S.CardItem>
      <S.CardItemContainer>
        <S.CardImageWrapper>
          <Link to={`/product/${product.id}`} >
            <S.CardImage src={product.images.length > 0 ? `http://localhost:8090/${product.images[0].url}` : '/img/noFoto.jpeg'} alt='picture' />
          </Link>
        </S.CardImageWrapper>
        <S.CardContent>
          <S.CardContentLink>
            <Link to={`/product/${product.id}`} >
              <S.CardTitle>{product.title}</S.CardTitle>
            </Link>
          </S.CardContentLink>
          <S.CardPrice>{product.price ? `${formatPrice(product.price)}` : `цена не указана`}</S.CardPrice>
          <S.CardPlace>{product.user.city ? product.user.city : 'на планете Земля'}</S.CardPlace>
          <S.CardDate>{timeResult}</S.CardDate>
        </S.CardContent>
      </S.CardItemContainer>
    </S.CardItem>
  );
};