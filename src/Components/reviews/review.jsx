import { HeaderSecond } from '../HeaderSecond/HeaderSecond';
import { Footer } from '../Footer/Footer';
import * as S from '../NewProductAdd/newProduct.styled';
import * as SU from './review.styled';
import { getTime } from '../../helpers/time';
import { useAddCommentMutation } from '../../Store/RTKQuery/getComments';
import { useParams } from 'react-router-dom';
import { getAccessTokenLocal, getRefreshTokenLocal, saveTokenUserLocal } from '../../helpers/token';
import { useEffect, useState } from 'react';
import { useGetNewTokenMutation } from '../../Store/RTKQuery/getToken';



export const Review = ({ closeModal, dataComments }) => {
  const params = useParams();
  const [comment, setComment] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [addComment, { error, isError, isSuccess: successAdding }] = useAddCommentMutation();
  const accessToken = getAccessTokenLocal();
  const refreshToken = getRefreshTokenLocal();
  const [refreshAllTokens, { data, isSuccess }] = useGetNewTokenMutation();


  const addNewComment = () => {
    addComment({ idProduct: params.id, commentText: comment, access: accessToken,
    });
  };

  useEffect(() => {
    if (isError && error.status === 401) {
        refreshAllTokens({ access: accessToken, refresh: refreshToken });
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
        saveTokenUserLocal(data);
        addNewComment();
    }
  }, [isSuccess])

  useEffect(() => {
    if (successAdding) {
        setComment('')
    }
  }, [successAdding]);

  useEffect(() => {
    if (comment.length < 1) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [comment]);



  return (
    <S.Wrapper>
      <S.ContainerBg>
        <HeaderSecond />
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>
              <S.ModalBtnReturnMobile onClick={closeModal}>
                <S.ModalBtnReturnImgMobile src='/img/return.png' />
              </S.ModalBtnReturnMobile>
              Отзывы о товаре
            </S.ModalTitle>
            <S.ModalBtnClose onClick={closeModal}>
              <S.ModalBtnCloseLine />
            </S.ModalBtnClose>
            <SU.ModalScroll>
                {(accessToken && (accessToken !== 'undefined')) ? 
              <S.ModalFormNewArtFormNewArt>
                <S.FormNewArtBlock>
                  <S.Label htmlFor='text'>Добавить отзыв</S.Label>
                  <S.FormNewArtArea
                    cols='auto'
                    rows='5'
                    value={comment}
                    placeholder='Введите описание'
                    onChange={(e) => setComment(e.target.value)}
                  />
                </S.FormNewArtBlock>
                <S.FormNewArtBtnPubBtnHov02
                  $isFormValid={isFormValid}
                  onClick={addNewComment}
                >
                  Опубликовать
                </S.FormNewArtBtnPubBtnHov02>
              </S.ModalFormNewArtFormNewArt> : 'Авторизуйтесь, чтобы добавить комментарий'}
              <SU.ModalReviewsReviews>
                {dataComments.map((review) => (
                  <SU.Review key={review.id}>
                    <SU.ReviewItem>
                      <SU.ReviewLeft>
                        <SU.ReviewImg>
                          <SU.Img
                            src={`http://localhost:8090/${review.author.avatar}`}
                            alt=''
                          />
                        </SU.ReviewImg>
                      </SU.ReviewLeft>
                      <SU.ReviewRight>
                        <SU.ReviewNameFontT>
                          {review.author.name}{' '}
                          <SU.Span>{getTime(review.created_on)}</SU.Span>
                        </SU.ReviewNameFontT>
                        <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                        <SU.ReviewTextFontT>{review.text}</SU.ReviewTextFontT>
                      </SU.ReviewRight>
                    </SU.ReviewItem>
                  </SU.Review>
                ))}
              </SU.ModalReviewsReviews>
            </SU.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.ContainerBg>
    </S.Wrapper>
  );
};
