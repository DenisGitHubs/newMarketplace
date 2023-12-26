import styled from 'styled-components';

export const MainReturnToMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 43px 10px 43px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const ReturnToMainLogoDesktop = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ReturnToMainLogoDesktopIcon = styled.img`
  width: 54px;
  height: auto;
`;

export const ReturnToMainLogoMobile = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const ReturnToMainLogoMobileIcon = styled.img`
  @media screen and (max-width: 600px) {
    width: 32px;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;
export const ReturnToMainForm = styled.div`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
`;

export const ReturnToMainButton = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

