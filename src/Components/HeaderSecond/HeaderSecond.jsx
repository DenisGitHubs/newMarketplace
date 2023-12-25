import { Link, useNavigate } from 'react-router-dom';
import * as S from './HeaderSecond.styled';
import { useState, useEffect } from 'react';
import { deleteUserLocal } from '../../helpers/user';

export const HeaderSecond = () => {

  const navigate = useNavigate();


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logOut = () => {
    deleteUserLocal();
    if (window.location.pathname === '/') {
      window.location.reload();
    }
    navigate('/');
  }

  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderLogo>
          <S.LogoMobLink to='/'>
            <S.LogoMobImg src='/img/logo-mob.png' alt='logo' />
          </S.LogoMobLink>
        </S.HeaderLogo>
        <S.HeaderBtnPutAd onClick={() => {navigate('/new-product')}}>
            Разместить объявление
        </S.HeaderBtnPutAd>
        <S.HeaderButtonSecond onClick={() => {navigate('/profile')}}>Личный кабинет</S.HeaderButtonSecond>
        <S.HeaderLogoutIcon src='/img/exit.png' onClick={logOut} />
        <S.HeaderLogoutIconMobile src='/img/exit-mobile.png' onClick={logOut} />
      </S.HeaderNav>
    </S.Header>
  );
};
