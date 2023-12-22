import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;
export const ContainerBg = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    background-color: transparent;
  }
`;
export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  opacity: 1;

  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: 0px;
    top: 55px;
    bottom: 54px;
    opacity: 1;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    min-width: 320px;
    height: 100%;
    padding: 30px 20px 30px;
    border-radius: 0px;
    position: relative;
  }
`;


export const ModalTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    gap: 26px;
    font-size: 24px;
    line-height: 29px;
    // padding: 0 0 0 26px;
    position: relative;
  }
`;

export const ModalBtnCloseSvg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 35px;
`;

export const ModalBtnReturnMobile = styled.div`
display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export const ModalBtnReturnImgMobile = styled.img`

  @media screen and (max-width: 600px) {
  width: 9px;
  height: 18px;
  }

`

export const ModalBtnClose = styled.button`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  background: #fff;
  border: none;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const ModalBtnCloseLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover::before {
    background-color: #0080c1;
  }
  &:hover::after {
    background-color: #0080c1;
  }
`;
export const ModalFormNewArtFormNewArt = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 22px;
    height: 100vw;
  }

  @media screen and (max-width: 600px) and (max-height: 740px) {
    overflow-y: auto;
    scrollbar-width: none;
  }
`;
export const FormNewArtBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 21px;
    color: #009ee4;
  }
`;

export const LabelDescription = styled(Label)`
  color: #000;
`;

export const FormNewArtInput = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
  }
`;

export const FormNewArtArea = styled.textarea`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  max-height: 200px;
  font-size: 16px;
  line-height: 24px;
  &::-webkit-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &:-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 107px;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
    }
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 14px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #009ee4;
      border-radius: 8px;
      border: 4px solid #fff;
    }
  }
`;

export const FormNewArtP = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 600px) {
    display: block;
    margin-left: 0px;
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const FormNewArtBarImg = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin: 0px -5px 10px;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 14px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #009ee4;
      border-radius: 6px;
      border: 3px solid #fff;
    }
  }
`;
export const FormNewArtImg = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;
  @media screen and (max-width: 600px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`;
export const Img = styled.img`
  display: block;
  width: 90px;
  height: 90px;
  object-fit: cover;
  z-index: 2;
  @media screen and (max-width: 600px) {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
export const FormNewArtImgCover = styled.input`
&::-webkit-file-upload-button {
  visibility: hidden;
}
cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    transform: rotate(90deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }
`;
export const FormNewArtBlockBlockPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
`;
export const FormNewArtInputPrice = styled.input`
  padding: 13px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 200px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::-webkit-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &:-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::-ms-input-placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  &::placeholder {
    text-align: end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  @media screen and (max-width: 600px) {
    padding: 9px 17px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;
export const FormNewArtInputPriceCover = styled.div`
width: 24px;
height: 24px;
font-size: 16px;
line-height: 24px;
color: #000000;
position: absolute;
bottom: 13px;
left: 170px;
z-index: 0;
background-color: #FFFFFF;
&::after {
    content: "\A0 \20BD";
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }
  @media screen and (max-width: 600px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;
    &::after {
        font-size: 14px;
        line-height: 21px;
      }
  }
`;
export const FormNewArtBtnPubBtnHov02 = styled.button`
  margin-top: 10px;
  width: 181px;
  height: 50px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: ${props => (props.$isFormValid ? '#0080c1' : '#d9d9d9')};
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
    flex-shrink: 0;
  }
`;
