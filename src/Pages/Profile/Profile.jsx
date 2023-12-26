import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import * as S from './Profile.styled';
import { useChangeMeMutation, useGetMeQuery } from '../../Store/RTKQuery/getMe';
import { getAccessTokenLocal, getRefreshTokenLocal, saveTokenUserLocal } from '../../helpers/token';
import { updateToken } from '../../Api/tokenApi';
import { useEffect, useState } from 'react';
import { handleAvatarClick, handleAvatarUpload, handleChangeMe, profileUserData, saveUserLocal } from '../../helpers/user';
import { useGetAllMyAdsQuery } from '../../Store/RTKQuery/getMyAds';
import { ModalSuccess } from '../../helpers/ModalSuccess/modalSuccess';
import { CardLoader } from '../../Components/Loader/CardLoader';
import { useGetNewTokenMutation } from '../../Store/RTKQuery/getToken';

export const Profile = ({}) => {
  const [city, setCity] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [surname, setSurname] = useState('')
  const [img, setImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const access = getAccessTokenLocal()
  const fileUpload = document.getElementById("file-upload");
  const {data =[], isError, error, isSuccess, refetch} = useGetMeQuery(access);
  const [changeMe, {isError: isErrorChangeMe, error: errorChangeMe, isSuccess: isSuccessChangeMe}] = useChangeMeMutation()
  const {data: dataMyAds=[], isLoading} = useGetAllMyAdsQuery(access)
  const [refreshAllTokens, { data: dataRefresh, isSuccess: isSuccessRefresh }] = useGetNewTokenMutation();
  const asyncUpgate = async () => {
    await updateToken()
    await refetch()
    return
  }
useEffect(() => {
if(isErrorChangeMe){
  const accessToken = getAccessTokenLocal();
  const refreshToken = getRefreshTokenLocal();
  refreshAllTokens({ access: accessToken, refresh: refreshToken })
}
},[isErrorChangeMe])
useEffect(() => {
  if(isSuccessRefresh){
    saveTokenUserLocal(dataRefresh);
    const access = getAccessTokenLocal()
    handleChangeMe(access, userName, surname, phone, city, changeMe)
    refetch()
  }
},[isSuccessRefresh])
  useEffect(() => {
    if(isSuccess) {
      saveUserLocal(data.email, data.name, data.id)
      profileUserData(data, setUserName, setSurname, setCity, setPhone, setAvatar)
    }
    if(isError && error.status === 401 && error.data.detail === "Could not validate credentials: Not enough segments") {
      asyncUpgate()
      return
    }
    if(isError && error.status === 401 && error.data.detail === 'Could not validate credentials: Signature has expired') {
      asyncUpgate()
      return
    }
  }, [isSuccess, isError])
useEffect(() => {
  if(isSuccessChangeMe) {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }
}, [isSuccessChangeMe])
  const handleSave = async () => {
    await handleChangeMe(access, userName, surname, phone, city, changeMe);

  };
  
  return (
    <S.Wrapper>
      <S.Container>
        <HeaderSecond />
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <ReturnToMain />
              <S.MainH2>{userName === '' ? "Здравствуйте, Неизвестный!" : `Здравствуйте, ${userName}!`}</S.MainH2>
              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                  <S.ProfileSettings>
                    <S.SettingsLeft>
                      <S.SettingsImg>
                        <S.SettingsImgLink >
                          <S.SettingsImgImg src={avatar === null ? '/img/empty-profile.png' : `http://localhost:8090/${avatar}`} alt='first_photo'/>
                        </S.SettingsImgLink>
                      </S.SettingsImg>
                      <S.SettingsImgInput
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          event.preventDefault();
                          const file = event.target.files?.[0];
                          if (file) {
                            setImg(file);
                            handleAvatarUpload(file, setAvatar, refetch);
                          }
                        }}
                      ></S.SettingsImgInput>
                      <S.SettingsChangePhoto onClick={(event) => handleAvatarClick(event, fileUpload, setAvatar)}>
                        Заменить
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>

                    <S.SettingsRight>
                      <S.SettingsForm>
                        <S.SettingsNameBox>
                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-fname'>
                              Имя
                            </S.SettingsLabel>
                            <S.SettingsFName
                              name='fname'
                              type='text'
                              placeholder=''
                              value={userName}
                              onChange={e => setUserName(e.target.value)}
                            />
                          </S.SettingsDiv>

                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-lname'>
                              Фамилия
                            </S.SettingsLabel>
                            <S.SettingsLName
                              name='lname'
                              type='text'
                              placeholder=''
                              value={surname}
                              onChange={e => setSurname(e.target.value)}
                            />
                          </S.SettingsDiv>
                        </S.SettingsNameBox>
                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-city'>
                            Город
                          </S.SettingsLabel>
                          <S.SettingsCity
                            name='city'
                            type='text'
                            placeholder=''
                            value={city}
                            onChange={e => setCity(e.target.value)}
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-phone'>
                            Телефон
                          </S.SettingsLabel>
                          <S.SettingsPhone
                            name='phone'
                            type='tel'
                            placeholder='+...'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                          />
                        </S.SettingsDiv>

                        <S.SettingsButton onClick={handleSave}>
                          Сохранить
                        </S.SettingsButton>
                        <ModalSuccess isOpen={isOpen} />
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            {isLoading ? <CardLoader /> : 
            <S.MainContent>
              <S.ContentCards>
                {dataMyAds.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </S.ContentCards>
            </S.MainContent>}
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
