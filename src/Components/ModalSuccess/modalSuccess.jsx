import * as S from './ModalSuccess.styled';

export const ModalSuccess = ({isOpen}) => {
    return (
      <S.ModalSuccess $isOpen={isOpen}>
        <S.Message>Успешно изменено!</S.Message>
      </S.ModalSuccess>
    );
  };