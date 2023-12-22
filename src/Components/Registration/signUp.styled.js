import styled from 'styled-components';

export const ContainerSignup = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;
export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: 200px;
  opacity: 1;

  @media screen and (max-width: 600px) {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 54px;
    opacity: 1;
    width: 100vw;
  }
`;
export const ModalFormLogin = styled.div`
  width: 366px;
  height: 647px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 42px 47px;

  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100%;
    border-radius: 0px;
    padding: 40px 20px;
  }
`;
export const ModalBtnSignupEnt = styled.div`
  width: 278px;
  height: 62px;
  background-color: #009ee4;
  border-radius: 6px;
  border: none;
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #0080c1;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 200px;
    height: 46px;
    border: none;
    margin-top: 26px;
  }
`;

