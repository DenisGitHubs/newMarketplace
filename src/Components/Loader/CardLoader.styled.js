import styled from 'styled-components';

export const MainContent = styled.div`
  width: 100%;
  height: 70vh;
  overflow: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 26px;
  row-gap: 40px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    // position: fixed;
    // right: 0;
    // left: 0;
    top: 134px;
    bottom: 84px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
`;

export const CardItem = styled.div`
  margin: 0;

  @media screen and (max-width: 600px) {
    margin: 0;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const CardItemContainer = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const CardImageWrapper = styled.div`
    width: 270px;
    height: 270px;
    background: linear-gradient(217deg, #d8d8d8, #f6f6f6, #d8d8d8);
    background-size: 600% 600%;

    -webkit-animation: fuck 3s ease infinite;
    -moz-animation: fuck 3s ease infinite;
    animation: fuck 3s ease infinite;
    
    @media screen and (max-width: 600px) {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        width: 100%;
        height: auto;
        padding-top: 100%;
        position: relative;
        background-color: #d9d9d9;
    }


    @-webkit-keyframes fuck {
        0%{background-position:88% 0%}
        50%{background-position:13% 100%}
        100%{background-position:88% 0%}
    }
    @-moz-keyframes fuck {
        0%{background-position:88% 0%}
        50%{background-position:13% 100%}
        100%{background-position:88% 0%}
    }
    @keyframes fuck {
        0%{background-position:88% 0%}
        50%{background-position:13% 100%}
        100%{background-position:88% 0%}
    }





`;

export const CardContent = styled.div`
  @media screen and (max-width: 600px) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    min-height: 130px;
  }
`;

export const CardTitle = styled.div`
  height: 22px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  margin-top: 40px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 600px) {
    height: 22px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const CardPrice = styled.div`
  height: 22px;
  width: 77px;
  background-color: #f0f0f0;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardPlace = styled.div`
  height: 20px;
  width: 126px;
  background-color: #f0f0f0;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;
