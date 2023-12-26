import { getAccessTokenLocal, getRefreshTokenLocal, saveTokenUserLocal } from "../helpers/token";
import { host } from './host'
export const updateToken = async () => {
    try {
      const access = await getAccessTokenLocal();
      const refresh = await getRefreshTokenLocal()
      await getToken(access, refresh);
      return
    } catch (error) {
      throw new Error(`Ошибка при обновлении токена:`);
    }
  };

export const getToken = async (access, refresh) => {
        fetch(`${host}/auth/login`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        access_token: access,
        refresh_token: refresh,
      }),
    })
    .then(response => response.json())
    .then(response => saveTokenUserLocal(response))
  };