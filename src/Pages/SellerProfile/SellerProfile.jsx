import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import * as S from './SellerProfile.styled';
import * as St from '../../Components/NewProductAdd/newProduct.styled'
import { Header } from '../../Components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { getAccessTokenLocal } from '../../helpers/token';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllAdsQuery } from '../../Store/RTKQuery/getAds';
import { saveProducts } from '../../Store/Slices/dataProductsSlice';
import { formatDate } from '../../helpers/time';
import { useEffect, useState } from 'react';
import { useGetAllUsersQuery } from '../../Store/RTKQuery/getUsers';

export const SellerProfile = () => {
  const userLoggedIn = getAccessTokenLocal();
  const params = useParams();
  const navigate = useNavigate();
  const [showFullPhone, setShowFullPhone] = useState(false);
  const [seller, setSeller] = useState();
  const [sellerAds, setSellerAds] = useState();
  const { data = [], isSuccess } = useGetAllAdsQuery();
  const { data: allUsers = [], isSuccess: getUsersSuccess } = useGetAllUsersQuery();

  useEffect(() => {
    if (isSuccess) {
      setSellerAds(
        data.filter((product) => product.user.id === Number(params.id)),
      );
    }
  }, [data]);

  useEffect(() => {
    if (getUsersSuccess) {
      setSeller(allUsers?.filter((user) => user.id === Number(params.id))[0]);
    }
  }, [allUsers]);

  return (
    <S.Wrapper>
      <S.Container>
        {userLoggedIn && userLoggedIn !== 'undefined' ? (
          <HeaderSecond />
        ) : (
          <Header />
        )}

        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <ReturnToMain />
              <S.MainH2>
                <St.ModalBtnReturnMobile onClick={() => navigate(-1)} >
                  <St.ModalBtnReturnImgMobile src="/img/return.png" />
                </St.ModalBtnReturnMobile>
                Профиль продавца</S.MainH2>
              <S.MainProfileSell>
                <S.ProfileSellContent>
                  <S.ProfileSellSeller>
                    <S.SellerLeft>
                      <S.SellerImg>
                        <S.SellerLinkImg target='_self'>
                          <S.SellerImgImg
                            src={
                              seller?.avatar
                                ? `http://localhost:8090/${seller?.avatar}`
                                : ''
                            }
                            alt={seller?.name}
                          />
                        </S.SellerLinkImg>
                      </S.SellerImg>
                    </S.SellerLeft>
                    <S.SellerRight>
                      <S.SellerTitle>
                        {seller?.name ? seller?.name : 'Хз как зовут продавца'}
                      </S.SellerTitle>
                      <S.SellerCity>{seller?.city}</S.SellerCity>
                      <S.SellerInf>
                        Продает товары с {formatDate(seller?.sells_from)}
                      </S.SellerInf>

                      <S.SellerImgMobBlock>
                        <S.SellerImgMob>
                          <S.SellerImgMobLink target='_self'>
                            <S.SellerImgMobImg
                              src={
                                seller?.avatar
                                  ? `http://localhost:8090/${seller?.avatar}`
                                  : ''
                              }
                              alt={seller?.name}
                            />
                          </S.SellerImgMobLink>
                        </S.SellerImgMob>
                      </S.SellerImgMobBlock>

                      <S.SellerBtn
                        onClick={() => setShowFullPhone(!showFullPhone)}
                        onMouseLeave={() => setShowFullPhone(false)}
                      >
                        Показать&nbsp;телефон
                        <S.SellerBtnSpan>
                          {seller?.phone
                            ? showFullPhone
                              ? seller?.phone
                              : seller?.phone.substring(0, 6) + 'XXX XX XX'
                            : 'номер не указан'}
                        </S.SellerBtnSpan>
                      </S.SellerBtn>
                    </S.SellerRight>
                  </S.ProfileSellSeller>
                </S.ProfileSellContent>
              </S.MainProfileSell>
              <S.MainTitle>Товары продавца</S.MainTitle>
            </S.MainCenterBlock>

            <S.MainContent>
              <S.ContentCards>
                {sellerAds?.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
