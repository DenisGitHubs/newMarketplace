import * as S from './newProduct.styled';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { Footer } from '../../Components/Footer/Footer';
import { useState } from 'react';
import { getAccessTokenLocal } from '../../helpers/token';
import { useAddAdsMutation } from '../../Store/RTKQuery/getAds';
import { useDispatch, useSelector } from 'react-redux';
import { savePhoto } from '../../Store/Slices/photoSlice';

export const NewProduct = ({ closeModal }) => {
    const [images, setImages] = useState([]);
    const [saveButtonActive, setSaveButtonActive] = useState(true);
    const [addAds, {isError, error}] = useAddAdsMutation();
    const [avatar, setAvatar] = useState(null)
    const fileUpload = document.getElementById("upload-photo");
    const photo = useSelector(state => state.photo)
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
if(isError) console.log(error);

    const handleImgUpload = async (file) => {
        const formData = new FormData();
        if (file) {
          formData.append("file", file);
          postAdsImage({
            access: getAccessTokenLocal(),
            image: formData,
          });
          setSaveButtonActive(true);
          setImages(images);
        } else {
          console.log("Файл не найден");
        }
      };

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (images.length < 5) {
          setImages([...images, file]);
          console.log(images);
        } else {
          alert('Можно загрузить не более пяти изображений.');
        }
      };

      const handlePostNewAdv = () => {
        // const dataAddAdv = {title: title, description: description, body: images, access: access, price: price}
        const access = getAccessTokenLocal()
        const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`image[${index + 1}]`, image);
      });
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      console.log(formData);
      console.log({access, formData});
        addAds({access, formData})

      }
    //   const handleAvatarClick = () => {
    //     // fileUpload.click();
    //     setAvatar(event.target.value);
    //   };
    return (
        <S.Wrapper>
            <S.ContainerBg>
                <HeaderSecond />
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Новое объявление</S.ModalTitle>
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
                                    <S.FormNewArtImg>
                                        <S.Img src={photo} alt=""/>
                                        <S.FormNewArtImgCover
                                            id="upload-photo"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                // const file = event.target.files?.[0];
                                                handleImageChange(e)
                                                // if (file) {
                                                // // setImages(file);
                                                // // handleImgUpload(file);
                                                // }
                                            }}
                                            ></S.FormNewArtImgCover>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover
                                            id="upload-photo"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                handleImageChange(e)
                                            }}
                                            ></S.FormNewArtImgCover>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover
                                            id="upload-photo"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                handleImageChange(e)
                                            }}
                                            ></S.FormNewArtImgCover>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover
                                            id="upload-photo"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                handleImageChange(e)
                                            }}
                                            ></S.FormNewArtImgCover>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover
                                            id="upload-photo"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                handleImageChange(e)
                                            }}
                                            ></S.FormNewArtImgCover>
                                    </S.FormNewArtImg>
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlockBlockPrice>
                                <S.Label htmlFor="price">Цена</S.Label>
                                <S.FormNewArtInputPrice type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                <S.FormNewArtInputPriceCover/>
                            </S.FormNewArtBlockBlockPrice>
                            <S.FormNewArtBtnPubBtnHov02 disabled={!saveButtonActive} onClick={() => handlePostNewAdv()}>Опубликовать</S.FormNewArtBtnPubBtnHov02>
                        </S.ModalFormNewArtFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
                <Footer />
            </S.ContainerBg>
        </S.Wrapper>
    )
}
