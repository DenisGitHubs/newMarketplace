import { Link } from 'react-router-dom';
import * as S from './Header.styled';
import * as St from '../HeaderSecond/HeaderSecond.styled'

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderNav>
        <St.HeaderLogo to='/'>
              <St.LogoMobImg src='/img/logo-mob.png' alt='logo' />
        </St.HeaderLogo>
        {(window.location.pathname === '/reg') ? '' :
        <Link to='/reg'>
          <S.HeaderButton type='submit'>
            Вход в личный кабинет
          </S.HeaderButton>
        </Link>}
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};
