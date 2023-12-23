import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeaderSecond } from '../HeaderSecond/HeaderSecond';
import * as S from '../NewProductAdd/newProduct.styled';
import { Footer } from '../Footer/Footer';
import { deleteImgFromState, deleteImgFromStateAndServer, handleImageChange } from '../../helpers/delAndUpImg';
import { useAddChangeImgsMutation, useChangeAdsTextMutation, useDeleteImgMutation } from '../../Store/RTKQuery/getAdvId';
import { getAccessTokenLocal } from '../../helpers/token';
import { updateToken } from '../../Api/tokenApi';


export const EditorAdv = ({data, closeModal }) => {
  const [images, setImages] = useState([null, null, null, null, null]);
  const [imgShow, setImgShow] = useState(data.images);
  const [imgDelete, setImgDelete] = useState([null, null, null, null, null]);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  const [deleteImg] = useDeleteImgMutation();
  const [changeAdsText, { isError, error}] = useChangeAdsTextMutation()
  const [addChangeImgs] = useAddChangeImgsMutation()
  useEffect(() => {
    if(imgShow.length < 5) {
      const numberLength = 5 - imgShow.length;
      const mass = Array(numberLength).fill(null)
      const newData = imgShow.concat(mass)
      setImgShow(newData)
    }
  },[])


const saveChanges = async () => {
  const access = getAccessTokenLocal();
  const id = data.id;
  await changeAdsText({access, id, title, description, price})
  if(imgDelete.length > 0){
    imgDelete.forEach((urlImg) => {
      if(urlImg !== null){
        console.log('del');
        deleteImg({access, id, urlImg});
      }
    })
  }
  if(images.length > 0) {
    images.forEach((image) => {
        const formDataFile = new FormData();
        formDataFile.append('file', image);
        addChangeImgs({access, id, formDataFile})
        });
}
closeModal();
};
const mainUpdaiteToken = async () => {
  await updateToken();
  saveChanges();
  return
}
if(isError && error.status === 401) {
mainUpdaiteToken()
}
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
                {imgShow.map((el, i) => el ? el.url ?
                <S.FormNewArtImg key={`image-${i}`}>
                <S.Img
                    src={`http://localhost:8090/${el.url}`}
                    alt="image"
                    key={`image-${i}`}
                    id="upload-photo"
                    type="file"
                    accept="image/*"
                    onClick={() =>  deleteImgFromStateAndServer(i, setImages, setImgShow, setImgDelete, el)}
                    /> </S.FormNewArtImg>
                    :
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
                <S.LabelDescription htmlFor='price'>Цена</S.LabelDescription>
                <S.FormNewArtInputPrice type='text' value={price} onChange={e => setPrice(e.target.value)} />
                <S.FormNewArtInputPriceCover />
              </S.FormNewArtBlockBlockPrice>
              <S.FormNewArtBtnPubBtnHov02 onClick={() => saveChanges()}>Сохранить</S.FormNewArtBtnPubBtnHov02>
            </S.ModalFormNewArtFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.ContainerBg>
    </S.Wrapper>
  );
};
