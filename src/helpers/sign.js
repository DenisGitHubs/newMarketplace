import { loginUser, registerUser, singIn } from '../Api/userApi';
import { saveTokenUserLocal } from './token';

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

export const handleSignIn = async (email, password, setError, navigate) => {
  try {
    const data = await loginUser(email, password);
    saveTokenUserLocal(data)
    navigate('/profile')
  } catch (error) {
    console.error(error);
    setError('Неизвестная ошибка');
  }
};

export const saveAndRegisterUser = async (
  email,
  password,
  name,
  surname,
  city,
  setError,
  navigate,
) => {
  try {
    await registerUser(email, password, name, surname, city);
    handleSignIn(email, password, setError, navigate)
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