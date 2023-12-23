import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main``;

export const ProductContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media screen and (max-width: 1000px) {
    padding: 0 20px 0;
  }
`;

export const ProductArticle = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 34px 5px 70px;

  @media screen and (max-width: 1000px) {
    max-width: 1178px;
    width: 100%;
    padding: 55px 0 0px;
    margin: 0 auto;
  }
`;

export const ProductArticleContent = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductArticleLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media screen and (max-width: 890px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ProductArticleRight = styled.div`
  max-width: 621px;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const ProductArticleFillImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover::before {
        border-top: 2px solid #0080C1;
        border-left: 2px solid #0080C1;
    }

    @media screen and (max-width: 1000px) {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        @media screen and (max-width: 600px) {
            aspect-ratio: 1 / 1;
            }
        }

        @media screen and (max-width: 600px) and (min-width: 480px) {
            &::before {
                top: 100px;
            }
        }
    }
`;

export const ProductArticleImage = styled.img`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  display: block;
  object-fit: cover;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ProductImageBarDesktop = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-left: -5px;
  position: relative;
  height: 100px;
  display: flex;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const RenderImg = styled.div`
  height: ${(props) => (props.$isExpanded ? '300px' : '88px')};
`;

export const ProductImageBarDiv = styled.img`
  width: 88px;
  height: 88px;
  min-width: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  display: block;
  object-fit: cover;
  transition: all 0.7s ease;
  &:hover {
    width: 92px;
    height: 92px;
    z-index: 1;
  }
`;

export const ProductImageBarMobile = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    width: 68px;
    height: 8px;
    background-color: #f0f0f0;
    padding: 7px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: calc(50% - (68px / 2));
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    bottom: 80px;
  }

  @media screen and (max-width: 530px) {
    bottom: 35px;
  }

  @media screen and (max-width: 450px) {
    bottom: 20px;
  }
`;

export const ProductImageBarMobileCircle = styled.div`
  background-color: ${(props) => (props.$active ? '#ffffff' : '#eeeeee')};
  border: 1px solid #ffffff;
  &:hover {
    background-color: #ffffff;
  }

  @media screen and (max-width: 1000px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

export const ProductArticleRightBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 700;
  color: #000000;

  @media screen and (max-width: 1000px) {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1;
  }
`;

export const ProductInfo = styled.div`
  margin-bottom: 34px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;
export const ProductDate = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ProductCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 17px;
    color: #5f5f5f;
    margin-bottom: 4px;
  }
`;

export const ProductReviews = styled(Link)`
  font-size: 16px;
  line-height: 21px;
  color: #009ee4;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 19px;
    color: #009ee4;
  }
`;

export const ProductPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ProductButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductButton = styled.div`
  cursor: pointer;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  a {
    color: #fff;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const ProductButtonSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const ProductAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: 1000px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ProductAuthorImage = styled.img`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

export const ProductAuthorContent = styled.div`
  margin-left: 12px;
`;

export const ProductAuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const ProductAuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const ProductDescription = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media screen and (max-width: 1000px) {
    padding: 0 20px 0;
  }
`;

export const ProductDescriptionTitle = styled.h3`
  margin-bottom: 32px;
  padding: 0 5px;
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  @media screen and (max-width: 1000px) {
    margin-bottom: 14px;
    padding: 0;
    font-size: 18px;
    line-height: 1;
  }
`;

export const ProductDescriptionContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const ProductDescriptionText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

// export const ArrayLeft = styled.img`
//   display: none;
//   @media screen and (max-width: 1000px) {
//     display: block;
//     position: absolute;
//     top: 20px;
//     left: 27px;
//     cursor: pointer;
//   }
// `;
