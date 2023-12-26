
import { getAccessTokenLocal } from "../helpers/token";
import { updateToken } from "./tokenApi";
import { host } from './host'

  export const registerUser = async ( 
    email,
    password,
    name,
    role,
    surname,
    city,) => {
    
    const response = await fetch(`${host}/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        role: role,
        city: city,
        surname: surname,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    } else if (response.status === 500) {
      throw new Error("Сервер нихт арбайтен");
    }
    const data = await response.json();
    return data;
  }

  export async function loginUser(email, password) {
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.status === 401 || response.status === 422) {
      throw new Error("Пользователь не авторизован");
    }
    const data = response.json();
    return data;
  }


  export const uploadUserAvatar = async (avatar) => {
    const access = getAccessTokenLocal()
    return fetch(`${host}/user/avatar`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${access}`,
      },
      body: avatar,
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      }
      if (response.status === 401) {
        updateToken();
        return uploadUserAvatar(avatar);
      }
      throw new Error("Неизвестная ошибка, попробуйте позже");
    });
  };