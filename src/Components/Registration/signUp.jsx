import { useState } from 'react';
import * as S from './signIn.styled';
import * as SU from './signUp.styled';
import {
  handleCity,
  handleEmail,
  handleName,
  handlePassword,
  handleRepeatPassword,
  saveAndRegisterUser,
  handleSurname,
  validateFormReg
} from '../../helpers/sign';
import { useNavigate } from 'react-router-dom';

export const SignUp = ({ setChoiceReg }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [errorPass, setErrorPass] = useState(null);
  const [passEqual, setPassEqual] = useState(true);
  return (
    <S.Wrapper>
      <SU.ContainerSignup>
        <SU.ModalBlock>
          <SU.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src='img/logo_modal.png' alt='' />
            </S.ModalLogo>
            <S.ModalBtnClose onClick={() => {navigate('/')}}>
              <S.ModalBtnCloseLine />
            </S.ModalBtnClose>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.ModalInputLogin
              value={email}
              onChange={(event) => handleEmail(setEmail, setError, event)}
              type='text'
              placeholder='email'
            />
            {errorPass && <S.PassErrorMessage>{errorPass}</S.PassErrorMessage>}
            <S.ModalInputLogin
              value={password}
              onChange={(event) =>
                handlePassword(setPassword, setErrorPass, event)
              }
              type='password'
              placeholder='Пароль'
            />
            <S.ModalInputLoginRepeatPass
              value={repeatPassword}
              onChange={(event) =>
                handleRepeatPassword(
                  setRepeatPassword,
                  password,
                  setErrorPass,
                  setPassEqual,
                  event,
                )
              }
              type='password'
              placeholder='Повторите пароль'
              $passEqual={passEqual}
            />

            <S.ModalInputLogin
              value={name}
              onChange={(event) => handleName(setName, event)}
              type='text'
              placeholder='Имя (необязательно)'
            />
            <S.ModalInputLogin
              value={surname}
              onChange={(event) => handleSurname(setSurname, event)}
              type='text'
              placeholder='Фамилия (необязательно)'
            />
            <S.ModalInputLogin
              value={city}
              onChange={(event) => handleCity(setCity, event)}
              type='text'
              placeholder='Город (необязательно)'
            />
            <SU.ModalBtnSignupEnt>
              <S.ModalBtnEnterLink
                onClick={() => {
                  if (
                    validateFormReg(
                      email,
                      password,
                      repeatPassword,
                      setError,
                      setErrorPass,
                    )
                  ) {
                    saveAndRegisterUser(
                      email,
                      password,
                      name,
                      surname,
                      city,
                      setError,
                      navigate,
                    );
                  }
                }}
              >
                Зарегистрироваться
              </S.ModalBtnEnterLink>
            </SU.ModalBtnSignupEnt>
            <SU.ModalBtnSignupEnt>
              <S.ModalBtnEnterLink onClick={() => setChoiceReg(true)}>
                Уже зарегистрирован
              </S.ModalBtnEnterLink>
            </SU.ModalBtnSignupEnt>
          </SU.ModalFormLogin>
        </SU.ModalBlock>
      </SU.ContainerSignup>
    </S.Wrapper>
  );
};

