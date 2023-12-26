import styled from 'styled-components';

export const ArrowLeft = styled.svg`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 10%;
    left: 8%;
    cursor: pointer;
    path {
        stroke: #d9d9d9;
      }
    &:hover {
        path {
          stroke: #009EE4;
        }
      }
  }
`;
