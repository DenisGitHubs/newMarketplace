import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import * as S from './Profile.styled';
import { useChangeMeMutation, useGetMeQuery } from '../../Store/RTKQuery/getMe';
import { getAccessTokenLocal } from '../../helpers/token';
import { updateToken } from '../../Api/tokenApi';
import { useEffect, useState } from 'react';
import { handleAvatarClick, handleAvatarUpload, handleChangeMe, profileUserData, saveUserLocal } from '../../helpers/user';
import { useGetAllMyAdsQuery } from '../../Store/RTKQuery/getMyAds';

export const Profile = ({}) => {
  const [city, setCity] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [surname, setSurname] = useState('')
  const [img, setImg] = useState(null);
  const access = getAccessTokenLocal()
  const fileUpload = document.getElementById("file-upload");
  const {data =[], isError, error, isSuccess, refetch} = useGetMeQuery(access);
  const [changeMe, {isError: isErrorChangeMe, error: errorChangeMe}] = useChangeMeMutation()
  const {data: dataMyAds=[]} = useGetAllMyAdsQuery(access)
  const asyncUpgate = async () => {
    await updateToken()
    await refetch()
    return
  }
  useEffect(() => {
    if(isSuccess) {
      const response = data
      saveUserLocal(response.email, response.name, response.id)
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
                          <S.SettingsImgImg src={avatar === null ? 'img/empty-profile.png' : `http://localhost:8090/${avatar}`} alt='first_photo'/>
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
                      <S.SettingsChangePhoto onClick={() => handleAvatarClick(event, fileUpload, setAvatar)}>
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

                        <S.SettingsButton onClick={() => handleChangeMe(access, userName, surname, phone, city, changeMe)}>Сохранить</S.SettingsButton>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            <S.MainContent>
              <S.ContentCards>
                {dataMyAds.map((product) => (
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
