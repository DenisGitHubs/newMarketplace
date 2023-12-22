import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeaderSecond } from '../HeaderSecond/HeaderSecond';
import * as S from '../NewProductAdd/newProduct.styled';
import { Footer } from '../Footer/Footer';
import { deleteImgFromState, handleImageChange } from '../../helpers/delAndUpImg';


export const EditorAdv = ({data, closeModal }) => {
  console.log(data);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [images, setImages] = useState([null, null, null, null, null]);
  const [imgShow, setImgShow] = useState([null, null, null, null, null]);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <HeaderSecond />
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>
              <S.ModalBtnReturnMobile onClick={closeModal}>
                <S.ModalBtnReturnImgMobile src="/img/return.png" />
              </S.ModalBtnReturnMobile>
              Редактировать объявление</S.ModalTitle>
                <S.ModalBtnClose onClick={closeModal}>
                  <S.ModalBtnCloseLine />
                </S.ModalBtnClose>
            <S.ModalFormNewArtFormNewArt>
              <S.FormNewArtBlock>
                <S.LabelDescription htmlFor='text'>Название</S.LabelDescription>
                <S.FormNewArtInput type='text' placeholder='Введите название' value={title} onChange={(e) => setTitle(e.target.value)} />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.LabelDescription htmlFor='text'>Описание</S.LabelDescription>
                <S.FormNewArtArea
                  cols='auto'
                  rows='10'
                  placeholder='Введите описание'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtP>
                  Фотографии товара<S.Span>не более 5 фотографий</S.Span>
                </S.FormNewArtP>
                <S.FormNewArtBarImg>
                {imgShow.map((el, i) => el ? 
                <S.FormNewArtImg key={`image-${i}`}>
                <S.Img
                      src={el}
                    alt="image"
                    key={`image-${i}`}
                    id="upload-photo"
                    type="file"
                    accept="image/*"
                    onClick={() =>  deleteImgFromState(i, setImages, setImgShow)}
                    /> </S.FormNewArtImg>
                    : <S.FormNewArtImg key={`image-${i}`}>
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
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                </S.FormNewArtBarImg>
              </S.FormNewArtBlock>
              <S.FormNewArtBlockBlockPrice>
                <S.LabelDescription htmlFor='price'>Цена</S.LabelDescription>
                <S.FormNewArtInputPrice type='text' value={price} onChange={e => setPrice(e.target.value)} />
                <S.FormNewArtInputPriceCover />
              </S.FormNewArtBlockBlockPrice>
              <S.FormNewArtBtnPubBtnHov02>Сохранить</S.FormNewArtBtnPubBtnHov02>
            </S.ModalFormNewArtFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.ContainerBg>
    </S.Wrapper>
  );
};
