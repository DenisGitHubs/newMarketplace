import * as S from './newProduct.styled';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { Footer } from '../../Components/Footer/Footer';
import { useState, useEffect } from 'react';
import { getAccessTokenLocal } from '../../helpers/token';
import { useNavigate } from 'react-router-dom';
import { updateToken } from '../../Api/tokenApi';
import { useAddAdsWithoutImgMutation, useAddImgsMutation } from '../../Store/RTKQuery/getMyAds';
import { deleteImgFromState, handleImageChange } from '../../helpers/delAndUpImg';

export const NewProduct = () => {
    const [images, setImages] = useState([null, null, null, null, null]);
    const [imgShow, setImgShow] = useState([null, null, null, null, null]);
    const [saveButtonActive] = useState(true);
    const [addAdsWithoutImg] = useAddAdsWithoutImgMutation();
    const [addImgs] = useAddImgsMutation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isFormValid, setIsFormValid] = useState(null);
    const navigate = useNavigate();

      const handlePostNewAdv = async () => {
        const access = getAccessTokenLocal()
        try{
            const dataAdv = await addAdsWithoutImg({access, title, description, price}).unwrap()
            if(images.length > 0) {
                const advID = dataAdv.id
                images.forEach((image) => {
                    const formDataFile = new FormData();
                    formDataFile.append('file', image);
                    addImgs({access, advID, formDataFile})
                    });
            }
            closeModal()
        } catch(error) {
            if(error.status === 401) {
                await updateToken();
                handlePostNewAdv()
                return
            }
        }
      }
      const closeModal = () => {
        navigate(-1);
      }
      useEffect(() => {
        if (title && price) {
          setIsFormValid(true);
        } else {
          setIsFormValid(false);
        }
      }, [title, price]);

    return (
        <S.Wrapper>
            <HeaderSecond  />
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>
                            <S.ModalBtnReturnMobile onClick={closeModal}>
                                <S.ModalBtnReturnImgMobile src="/img/return.png" />
                            </S.ModalBtnReturnMobile>
                        Новое объявление</S.ModalTitle>
                        <S.ModalBtnClose onClick={closeModal}>
                            <S.ModalBtnCloseLine />
                        </S.ModalBtnClose>
                        <S.ModalFormNewArtFormNewArt>
                            <S.FormNewArtBlock>
                                <S.Label htmlFor="text" name="name" id="formName" placeholder="Введите название">Название</S.Label>
                                <S.FormNewArtInput type="text" placeholder="Введите название" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.Label htmlFor="text">Описание</S.Label>
                                <S.FormNewArtArea cols="auto" rows="10" placeholder="Введите описание" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormNewArtP>Фотографии товара<S.Span>не более 5 фотографий</S.Span></S.FormNewArtP>
                                <S.FormNewArtBarImg>
                                  {
                                    imgShow.map((el, i) => el ? 
                                    <S.FormNewArtImg key={`image-${i}`}>
                                    <S.Img
                                     src={el}
                                      alt="image"
                                      key={`image-${i}`}
                                      id="upload-photo"
                                      type="file"
                                      accept="image/*"
                                      onClick={() =>  deleteImgFromState(i, setImages, setImgShow)}
                                      /> 
                                      </S.FormNewArtImg>
                                      :
                                       <S.FormNewArtImg key={`image-${i}`}>
                                      <S.FormNewArtImgCover
                                        id="upload-photo"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                          handleImageChange(e, i, setImgShow, images, setImages);
                                        }}
                                      ></S.FormNewArtImgCover>
                                    </S.FormNewArtImg>)
                                  }
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlockBlockPrice>
                                <S.Label htmlFor='price'>Цена</S.Label>
                                <S.FormNewArtInputPrice
                                type='text'
                                value={price}
                                pattern="\d+,\d{2}"
                                onChange={(e) => {
                                    if (/^\d+$/.test(e.target.value) || e.target.value === '') {
                                    setPrice(e.target.value);
                                    }
                                }}
                                />
                                <S.FormNewArtInputPriceCover/>
                            </S.FormNewArtBlockBlockPrice>
                            <S.FormNewArtBtnPubBtnHov02 
                                disabled={!saveButtonActive} 
                                onClick={() => handlePostNewAdv()} 
                                $isFormValid={isFormValid}
                                >
                                Опубликовать
                                </S.FormNewArtBtnPubBtnHov02>
                        </S.ModalFormNewArtFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
                <Footer />
            </S.ContainerBg>
        </S.Wrapper>
    )
}
