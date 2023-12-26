export const getAccessTokenLocal = () => {
    const token = localStorage.getItem('access');
    return token ? token : null
}
export const getRefreshTokenLocal = () => {
    const token = localStorage.getItem('refresh');
    return token ? token : null
}
export const getTypeTokenLocal = () => {
    const token = localStorage.getItem('type');
    return token ? token : null
}

export const saveTokenUserLocal = (data) => {
    localStorage.setItem("access", data.access_token);
    localStorage.setItem("refresh", data.refresh_token);
    localStorage.setItem("type", data.token_type);
}
