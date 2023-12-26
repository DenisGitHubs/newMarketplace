import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  padding: 52px 10px 37px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    padding: 85px 10px 84px;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
    text-align: center;
    position: relative;

  }
`;

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

export const Error = styled.div`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
