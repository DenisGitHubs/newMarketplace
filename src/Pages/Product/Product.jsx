import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import * as S from '../Main/main.styled';
import * as St from './Product.styled';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { Review } from '../../Components/reviews/review';
import { EditorAdv } from '../../Components/EditorAdv/editor';
import { useGetAdvIDQuery } from '../../Store/RTKQuery/getAdvId';
import { getTime, formatDate } from '../../helpers/time';
import { useGetCommentsQuery } from '../../Store/RTKQuery/getComments';
import { updateToken } from '../../Api/tokenApi';
import { getSeller } from '../../Api/sellerApi';
import { useDeleteAdvMutation } from '../../Store/RTKQuery/getMyAds';
import { getAccessTokenLocal } from '../../helpers/token';
import { ArrayLeftSvg } from '../../helpers/ArrayLeftSvg/ArrayLeftSvg';

export const Product = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [deleteAdv, {error: errorDelete, isError: isErrorDelete, isSuccess: isSuccessDelete}] = useDeleteAdvMutation();
  const [timeResult, setTimeResult] = useState('00.00.00');
  const [userId, setUserId] = useState(null);
  const [dataUsers, setDataUsers] = useState([]);
  const [showFullPhone, setShowFullPhone] = useState(false);
  const { data: dataComments = [] } = useGetCommentsQuery(id);
  const [selectedImage, setSelectedImage] = useState('/img/noFoto.jpeg');
  const {
    data = [],
    isError,
    error,
    isSuccess,
    refetch,
  } = useGetAdvIDQuery(id);
  const userLoggedIn = getAccessTokenLocal();
  // может просматривать незалогиненный
  const userIsSeller = Boolean(String(data.user_id) === window.localStorage.getItem('id'));

  const deleteThisAdv = async () => {
    const access = getAccessTokenLocal()
    await deleteAdv({access, id })
    return
  }
const mainUpdaiteToken = async () => {
        await updateToken();
        deleteThisAdv();
        return
}
  if(isErrorDelete && errorDelete.status === 401) {
    mainUpdaiteToken()
  }
  if(isSuccessDelete) {
    navigate(-1)
  }

  useEffect(() => {
    if (isSuccess) {
      const result = getTime(data.created_on);
      setTimeResult(result);
      setUserId(Number(data.user.id) - 1);
    }
    if (data.images && data.images.length > 0) {
      setSelectedImage(`http://localhost:8090/${data.images[0].url}`);
    } else {
      if (isSuccess) {
        setSelectedImage('/img/noFoto.jpeg'); 
      }
    }
  }, [isSuccess, data]);

    useEffect(() => {
       if(isSuccess && show2 ) {
        setShow(true)
      }
      },[isSuccess, show2]);

    useEffect(() => {
       getSeller()
       if(isError && error.status == 401 ) {
        asyncUpgate()
        getSeller()
      }

      },[isSuccess]);

  const asyncUpgate = async () => {
    await updateToken();
    await refetch();
    return;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDataUser = await getSeller();
        setDataUsers(fetchedDataUser);
      } catch (error) {
        console.error('Ушел на базу:', error);
      } finally {
        setShow2(true)
      }
    };
    fetchData(); // Вызываем функцию fetchData при монтировании компонента
  }, []);

  const [openReviews, setOpenReviews] = useState(false);
  const openReviewsModal = () => {
    setOpenReviews(true);
  }

  const [showAdvEdit, setShowAdvEdit] = useState(false);
  const openAdvEditor = () => {
    setShowAdvEdit(true);
  };
  const handleCloseAllModals = () => {
    setOpenReviews(false);
    setShowAdvEdit(false);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return show ? (
    <S.Wrapper>
      <S.Container>
      {(userLoggedIn && (userLoggedIn !== 'undefined')) ? <HeaderSecond /> : <Header />}
        <S.Main>
          <St.ProductContainer>
            <ReturnToMain />
          </St.ProductContainer>
          <St.ProductArticle>
            <St.ProductArticleContent>
              <St.ProductArticleLeft>
                <St.ProductArticleFillImg>
                <Link to='/'>
                    <ArrayLeftSvg/>
                  </Link>
                  <St.ProductArticleImage
                    src={selectedImage}
                    alt='Фото товара'
                  />
                  <St.ProductImageBarDesktop>
                    {data.images.map((image) => (
                      <St.ProductImageBarDiv
                        key={image.id}
                        src={`http://localhost:8090/${image.url}`}
                        alt='Фото товара'
                        onClick={() =>
                          handleImageClick(`http://localhost:8090/${image.url}`)
                        }
                      />
                    ))}
                  </St.ProductImageBarDesktop>
                  <St.ProductImageBarMobile>
                    {data.images.map((image) => (
                      <St.ProductImageBarMobileCircle 
                        key={image.id}
                        onClick={() => handleImageClick(`http://localhost:8090/${image.url}`)}
                        $active={selectedImage === `http://localhost:8090/${image.url}`}
                      />
                    ))}
                  </St.ProductImageBarMobile>
                </St.ProductArticleFillImg>
              </St.ProductArticleLeft>
              <St.ProductArticleRight>
                <St.ProductArticleRightBlock>
                  <St.ProductTitle>{data.title}</St.ProductTitle>
                  <St.ProductInfo>
                    <St.ProductDate>{timeResult}</St.ProductDate>
                    <St.ProductCity>
                      {Boolean(data.user.city)
                        ? data.user.city
                        : 'что нам город? Перед нами весь мир...не указан короче'}
                    </St.ProductCity>
                    <St.ProductReviews onClick={openReviewsModal}>
                      {dataComments.length === 0
                        ? `еще нет отзывов, но вы можете сделать первый`
                        : `Отзывов: ${dataComments.length}`}
                    </St.ProductReviews>
                  </St.ProductInfo>
                  <St.ProductPrice>{data.price} руб.</St.ProductPrice>
                  {userIsSeller ? (
                    <St.ProductButtonBox>
                      <St.ProductButton onClick={openAdvEditor}>
                        Редактировать
                      </St.ProductButton>
                      <St.ProductButton onClick={() => deleteThisAdv()}>Снять с публикации</St.ProductButton>
                    </St.ProductButtonBox>
                  ) : (
                    <St.ProductButton
                      onClick={() => setShowFullPhone(!showFullPhone)}
                      onMouseLeave={() => setShowFullPhone(false)}
                    >
                      Показать&nbsp;телефон&nbsp;
                      <St.ProductButtonSpan>
                        {dataUsers[userId].phone
                          ? showFullPhone
                            ? dataUsers[userId].phone
                            : dataUsers[userId].phone.substring(0, 6) +
                              'XXX XX XX'
                          : 'номер не указан'}
                      </St.ProductButtonSpan>
                    </St.ProductButton>
                  )}
                  <St.ProductAuthor>
                    <St.ProductAuthorImage
                      src={`http://localhost:8090/${dataUsers[userId].avatar}`}
                      alt={dataUsers[userId].name}
                    />
                    <St.ProductAuthorContent>
                      <Link to={`/seller-profile/${dataUsers[userId].id}`}>
                        <St.ProductAuthorName>
                          {dataUsers[userId].name
                          ? dataUsers[userId].name
                          : 'Продавец решил остаться безымянным'}
                        </St.ProductAuthorName>
                      </Link>
                      <St.ProductAuthorAbout>
                        Продает товары с {formatDate(dataUsers[userId].sells_from)}
                      </St.ProductAuthorAbout>
                    </St.ProductAuthorContent>
                  </St.ProductAuthor>
                </St.ProductArticleRightBlock>
              </St.ProductArticleRight>
            </St.ProductArticleContent>
          </St.ProductArticle>
          <St.ProductDescription>
            <St.ProductDescriptionTitle>
              Описание товара
            </St.ProductDescriptionTitle>
            <St.ProductDescriptionContent>
              <St.ProductDescriptionText>
                {data.description
                  ? data.description
                  : 'Продавец не описал товар'}
              </St.ProductDescriptionText>
            </St.ProductDescriptionContent>
          </St.ProductDescription>
          {openReviews ? <Review closeModal={handleCloseAllModals} dataComments={dataComments} /> : null}
          {showAdvEdit ? <EditorAdv data={data} closeModal={handleCloseAllModals} /> : null}
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  ) : null;

};
