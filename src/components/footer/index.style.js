import styled from "styled-components";

export const FooterStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  .footerInfoTitle {
    font-size: 25px;
    width: fit-content;
  }

  .footerInfo {
  }

  .footerInfo p {
    font-size: 14px;
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.481);
  }
  .footerIcon {
    font-size: 30px;
    border-radius: 5px;
    margin-right: 10px;
  }
  .instagramm {
    background-image: linear-gradient(orange, red, purple);
    color: white;
  }
  .telegramm {
    background-color: rgb(0, 128, 255);
    color: white;
  }

  .facebook {
    background-color: rgb(0, 60, 255);
    color: white;
  }

  .youtube {
    background-color: red;
    color: white;
  }

  @media only screen and (min-width: 900px) and (max-width: 1200px) {
    .footerInfo p {
      font-size: 14px;
    }

    .footerInfoTitle {
      font-size: 23px;
    }
  }
`;
