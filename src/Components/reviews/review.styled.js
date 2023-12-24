
import styled from "styled-components";

export const ModalReviewsReviews = styled.div`
width: 100%;
height: 495px;

`

export const ModalScroll = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: start;
    -ms-flex-align: start;
        align-items: flex-start;
width: 100%;
overflow-y: auto;
scrollbar-color: #FFFFFF #2E2E2E;
scrollbar-width: thin;
scrollbar-width: 0px;
&::-webkit-scrollbar {
    width: 0px;
    background-color: #FFFFFF;
  }
&::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 0px;
  }
`

export const Review = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
align-items: center;
margin: 15px 0;
`

export const ReviewItem = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: start;
    -ms-flex-align: start;
        align-items: flex-start;
-webkit-box-pack: start;
    -ms-flex-pack: start;
        justify-content: flex-start;
`
export const ReviewLeft = styled.div`
margin-right: 12px;
`
export const ReviewImg = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #F0F0F0;
`
export const Img = styled.img`
display: block;
width: 100%;
height: auto;
border-radius: 50%;
-o-object-fit: cover;
   object-fit: cover;
`
export const ReviewRight = styled.div`
display: block;
`
export const ReviewNameFontT = styled.div`
margin-bottom: 12px;
font-weight: 600;

font-size: 16px;
line-height: 32px;
color: #000000;
@media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
}
`
export const Span = styled.span`
margin-left: 10px;
color: #5F5F5F;
`
export const ReviewTitleFontT = styled.h5`
font-weight: 600;

font-size: 16px;
line-height: 32px;
color: #000000;
@media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
}
`
export const ReviewTextFontT = styled.p`
font-size: 16px;
line-height: 32px;
color: #000000;
@media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
}
`
