import { Link } from 'react-router-dom';
import * as S from './ReturnToMain.styled';

export const ReturnToMain = () => {
  return (
    <S.MainReturnToMain>
      <S.ReturnToMainLogoDesktop>
        <Link to='/'>
          <S.ReturnToMainLogoDesktopIcon src='/img/logo.png' />
        </Link>
      </S.ReturnToMainLogoDesktop>
      <S.ReturnToMainLogoMobile>
        <Link to='/'>
          <S.ReturnToMainLogoMobileIcon src='/img/logo-mob.png' />
        </Link>
      </S.ReturnToMainLogoMobile>
      <S.ReturnToMainForm>
        <Link to='/'>
          <S.ReturnToMainButton type='submit'>
            Вернуться на главную
          </S.ReturnToMainButton>
        </Link>
      </S.ReturnToMainForm>
    </S.MainReturnToMain>
  );
};
