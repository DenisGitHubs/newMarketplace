import { saveUserAfterReg } from '../Store/Slices/userSlice';
import { host } from './host'
export const registerUser = async (
  dispatch,
  email,
  password,
  name,
  role,
  surname,
  city,
) => {
  const response = await fetch(`${host}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
      role: role,
      city: city,
      surname: surname,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (response.status === 400) {
    throw new Error('Такой пользователь уже существует');
  } else if (response.status === 500) {
    throw new Error('Сервер нихт арбайтен');
  }
  const data = await response.json();
  dispatch(saveUserAfterReg({ data }));
  return data;
};

export async function singIn(email, password) {
  const response = await fetch(`${host}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (response.status === 422) {
    throw new Error('Проверьте вводимые данные');
  } else if (response.status === 500) {
    throw new Error('Сервер нихт арбайтен');
  }
  const data = await response.json();
  console.log(data);
  return data;
}
