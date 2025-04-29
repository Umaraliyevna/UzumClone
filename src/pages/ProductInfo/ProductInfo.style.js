import styled from "styled-components";

export const ProductInfoStyle = styled.div`
  .productInfoList {
    display: flex;
    padding: 15px 0;
    li {
      font-size: 12px;
      width: auto;
      padding-left: 5px;
      padding-right: 0;
      color: rgba(0, 0, 0, 0.54);
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .productInfoList {
      display: none;
    }
  }
`;

export const ImagesInfoStyle = styled.div`
  min-width: 68%;
  .productIcon {
    color: yellow;
    padding-top: 0;
    margin-top: 0;
  }
  .comment {
    text-decoration: underline;
  }
  .productImagesVertical {
    overflow-y: scroll;
  }

  .productImagesVertical::-webkit-scrollbar {
    scrollbar-width: none;
  }

  .productImagesVertical img {
    width: 80px;
    height: 130px;
    border-radius: 10px;
    display: block;
    margin: 5px;
  }

  .productImagesGorizontal {
    display: flex;
    overflow-x: scroll;
    margin-left: 20px;
  }
  .productImagesGorizontal::-webkit-scrollbar {
    scrollbar-width: none;
  }
  .productImagesGorizontal img {
    min-width: 280px;
    height: 450px;
    border-radius: 15px;
    margin: 5px;
  }
  .reytingNumber {
    font-weight: bold;
    padding-right: 7px;
    font-size: 25px;
    color: black;
  }
  .reytingComment {
    margin-left: 15px;
    color: rgba(0, 0, 0, 0.485);
    text-decoration: underline;
  }
  .customSendImages {
    overflow-x: scroll;
    display: flex;
  }

  .customSendImages::-webkit-scrollbar {
    scrollbar-width: none;
  }

  .customSendImages img {
    margin: 5px;
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  .commentaryCard {
    min-width: 43%;
    border: 0.5px solid rgba(51, 50, 50, 0.422);
    padding: 20px;
    border-radius: 20px;
    padding-bottom: 15px;
  }
  .showAllComment {
    margin: 5px auto;
    width: 100%;
    padding: 15px;
    background-color: #5d6e854d;
    text-transform: capitalize;
    font-size: 20px;
    color: #333333;
  }
  .productDescription {
    margin-top: 30px;
  }
  .productDescription button {
    background-color: black;
    color: white;
    padding: 10px;
    text-align: center;
    border: none;
    border-radius: 30px;
    font-weight: 700;
    text-transform: capitalize;
  }
  .productDescription p {
    font-size: 16px;
    margin-top: 5px;
    line-height: 27px;
  }

  .productDescription img {
    display: block;
    text-align: center;
    width: min-content;
    height: 650px;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    min-width: 100%;

    .commentaryCard {
      min-width: 43%;
      padding: 15px;
    }

    .productImagesVertical {
      width: 100px;
    }

    .productImagesGorizontal {
      margin-left: 5px;
    }
    .productImagesVertical img {
      width: 100%;
      height: 100px;
      margin: 3px;
    }
    .productImagesGorizontal img {
      min-width: 220px;
      width: 380px;
      margin: 3px;
    }
    .productDescription img {
      width: 95%;
      height: 580px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    .commentaryCard {
      min-width: 40%;
      padding: 15px;
    }

    .productImagesVertical {
      display: none;
    }

    .productImagesGorizontal {
      margin-left: 0px;
    }

    .gorizontalImage1 {
      display: none;
    }
    .productImagesGorizontal img {
      min-width: 250px;
      width: 550px;
      margin: 0px;
    }
    .productDescription img {
      width: 100%;
      height: 480px;
    }
  }
`;

export const ProductCostCardStyle = styled.div`
  min-width: 28%;
  padding-left: 20px;
  .productCostCard {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-bottom: 20px;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
  }

  .oldPrice {
    display: inline-block;
    color: gray;
    text-decoration: line-through;
  }
  .installmentOptions {
    margin-top: 8px;
    background: #f3f3f3;
    padding: 8px;
    border-radius: 8px;
  }
  .installmentOptions button {
    padding: 6px 12px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    text-transform: lowercase;
    color: black;
  }

  .selected {
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .monthlyPayment {
    background: yellow;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
    margin-top: 8px;
  }

  .quickBuy {
    flex-grow: 1;
    background: #e0e0e0;
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }

  .heart {
    font-size: 23px;
    background-color: #e0e0e0;
    border-radius: 5px;
    padding-top: 0;
    margin-left: 5px;
    padding: 0 3px;
  }

  .addToCart {
    margin-top: 12px;
    width: 100%;
    background: rgb(39, 3, 241);
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .stockInfo {
    margin-top: 12px;
    font-size: 14px;
    color: #444;
  }

  .stockCheck {
    width: 25px;
    height: 25px;
    background-color: rgba(0, 128, 0, 0.404);
    padding: 2px;
    border-radius: 5px;
  }

  .stockBag {
    width: 25px;
    height: 25px;
    background-color: rgba(255, 180, 6, 0.493);
    padding: 2px;
    border-radius: 5px;
  }

  .deliveryInfo {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .section {
    margin-bottom: 12px;
  }

  .badge {
    background: rgb(39, 3, 241);
    color: white;
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 8px;
  }

  .paymentIcons {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .icon {
    font-size: 24px;
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 12px 0;
  }

  .ratingIcon {
    color: rgb(255, 208, 0);
  }
  .storeInfo {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 12px;
    position: sticky;
    top: 15px;
  }

  .storeInfo img {
    width: 60px;
    height: 60px;
  }

  .storeLogo {
    width: fit-content;
    border-radius: 50%;
  }

  .rating {
    font-size: 14px;
    color: #444;
  }

  .storeButton {
    background: #e0e0e0;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    display: block;
    width: 100%;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding-left: 10px;
    .installmentOptions button {
      padding: 5px;
      width: auto;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding-left: 10px;
    .installmentOptions button {
      padding: 5px;
      width: auto;
    }
  }
`;
