import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media screen and (max-width: 580px) {
    padding: 85px 0px 84px;
  }
`;

export const MainCenterBlock = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 580px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: 580px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    gap: 30px;
  }
`;

export const MainProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 580px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const ProfileSellContent = styled.div`
  width: 100%;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProfileSellSeller = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;

  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SellerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 580px) {
    display: none;
    margin-right: 0px;
  }
`;

export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const SellerLinkImg = styled.a``;

export const SellerImgImg = styled.img`
  // width: 100%;
  // height: auto;
  width: 170px;
  height: 170px;
  display: block;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (max-width: 580px) {
    width: 132px;
    height: 132px;
    border-radius: 50%;
  }
`;

export const SellerRight = styled.div`
  width: auto;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  @media screen and (max-width: 580px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`;

export const SellerTitleLoading = styled.div`
  width: 100px;
  height: 20px;
  background-color: #f0f0f0;
`
export const SellerInfLoading = styled.div`
  width: 170px;
  height: 20px;
  background-color: #f0f0f0;
`

export const SellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;

export const SellerInf = styled(SellerCity)``;

export const SellerImgMobBlock = styled.div`
  display: none;
  @media screen and (max-width: 580px) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
`;

export const SellerImgMob = styled.div`
  @media screen and (max-width: 580px) {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f0f0f0;
  }
`;

export const SellerImgMobLink = styled.a``;

export const SellerImgMobImg = styled.img`
  @media screen and (max-width: 580px) {
    width: 132px;
    height: 132px;
    display: block;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const SellerBtn = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const SellerBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;

export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 580px) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 580px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: 1158px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 890px) {
    width: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }


  @media screen and (max-width: 600px) {
    max-width: 550px;
    padding-left: 16px;
    padding-right: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 10px;
    grid-auto-rows: auto;
    justify-content: center;
    height: 100%;
  }
`;
