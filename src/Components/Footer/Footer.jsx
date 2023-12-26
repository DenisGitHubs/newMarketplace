import { Link } from "react-router-dom";
import * as S from "./Footer.styled";


export const Footer = () => {

    return (
        <S.FooterWrapper>
            <S.FooterContainer>
                <Link to='/'>
                    <S.FooterImg src="/img/icon_01.png" alt="main" />
                </Link>
                <Link to='/new-product' replace>
                    <S.FooterImg src="/img/icon_02.png" alt="new_add" />
                </Link>
                <Link to='/profile'>
                    <S.FooterImg src="/img/icon_03.png" alt="new_add" />
                </Link>
            </S.FooterContainer>
        </S.FooterWrapper>

    )
}


