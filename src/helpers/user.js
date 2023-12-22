import { uploadUserAvatar } from "../Api/userApi";
import { deleteTokenLocal } from "./token";

export const saveUserLocal = (email, nameUser, id) => {
    localStorage.setItem('email', email);
    localStorage.setItem('name', nameUser);
    localStorage.setItem('id', id);
}

export const deleteUserLocal = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('id');
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('type')
}
export const getEmailFromLocal = () => localStorage.getItem('email')

export const profileUserData = (data, setUserName, setSurname, setCity, setPhone, setAvatar) => {
    if(data.name !== '') setUserName(data.name);
    if(data.surname !== '') setSurname(data.surname);
    if(data.city !== '') setCity(data.city)
    if(data.phone !== null) setPhone(data.phone)
    if(data.avatar !== null) setAvatar(data.avatar)
}

export const handleChangeMe = async (access, userName, surname, phone, city, changeMe) => {
    const email = getEmailFromLocal()
    const dataChangeMe = {access: access, email: email, userName: userName, surname: surname, phone: phone, city: city}
    await changeMe(dataChangeMe)
    return
}

export const handleAvatarUpload = (file, setAvatar, refetch) => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
      uploadUserAvatar(formData)
        .then((data) => {
          setAvatar(data.avatar);
          refetch()
        })
        .catch((error) => {
          console.error("Error fetching workout data:", error);
        });
    } else {
      console.log("Файл не найден");
    }
  };


export const handleAvatarClick = (event, fileUpload, setAvatar) => {
    fileUpload.click();
    setAvatar(event.target.value);
  };