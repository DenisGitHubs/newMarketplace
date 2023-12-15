import { registerUser, singIn } from '../Api/userApi';
import {
  saveTokenUserAfterSignIn,
  saveUserAfterReg,
} from '../Store/Slices/userSlice';

export const handleEmail = (setEmail, setError, event) => {
  const trimmedValue = event.target.value.trim();
  setEmail(trimmedValue);
  const emailValidation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailValidation.test(trimmedValue)) {
    setError('Проверяйте вводимые символы');
  } else {
    setError(null);
  }
};

export const handlePassword = (setPassword, setErrorPass, event) => {
  const trimmedValue = event.target.value.trim();
  setPassword(trimmedValue);
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  if (!passwordValidation.test(trimmedValue)) {
    setErrorPass('От 6 символов с заглавными, строчными буквами и цифрами');
  } else {
    setErrorPass(null);
  }
  setPassword(trimmedValue);
};

export const handleRepeatPassword = (
  setRepeatPassword,
  password,
  setErrorPass,
  setPassEqual,
  event,
) => {
  setRepeatPassword(event.target.value);
  if (event.target.value !== password) {
    setErrorPass('Пароли пока не совпадают');
    setPassEqual(false);
  } else {
    setErrorPass(null);
    setPassEqual(true);
  }
};

export const handleName = (setName, event) => {
  setName(event.target.value);
};

export const handleSurname = (setSurname, event) => {
  setSurname(event.target.value);
};

export const handleCity = (setCity, event) => {
  setCity(event.target.value);
};

export const handleSignIn = async (email, password, setError, dispatch) => {
  try {
    const data = await singIn(email, password);
    dispatch(saveTokenUserAfterSignIn({ data }));
  } catch (error) {
    console.error(error);
    setError('Неизвестная ошибка');
  }
};

export const saveAndRegisterUser = async (
  email,
  password,
  name,
  role,
  surname,
  city,
  setError,
  dispatch,
) => {
  try {
    const data = await registerUser(email, password, name, role, surname, city);
    dispatch(saveUserAfterReg({ data }));
    await handleSignIn(email, password, setError, dispatch);
  } catch (error) {
    console.error(error);
    setError('Неизвестная ошибка');
  }
};

export const validateFormReg = (
  email,
  password,
  repeatPassword,
  setError,
  setErrorPass,
) => {
  if (!email) {
    setError('Введите email');
    return false;
  }

  if (!password) {
    setError('Введите пароль');
    return false;
  }

  if (password !== repeatPassword) {
    setErrorPass('Пароли не совпадают. Попробуйте еще раз');
    return false;
  }

  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  if (!passwordValidation.test(password)) {
    setErrorPass('Пароль не соответствует требованиям');
    return false;
  }

  return true;
};

export const validateFormLog = (email, password, setError) => {
  if (!email) {
    setError('Введите email');
    return false;
  }

  if (!password) {
    setError('Введите пароль');
    return false;
  }

  return true;
};