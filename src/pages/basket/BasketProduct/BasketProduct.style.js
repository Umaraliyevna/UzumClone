import styled from "styled-components";

export const BasketCardStyle = styled.div`
  padding: 10px 3px;
  border-bottom: 1px solid #eee;

  .checkbox {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .productImage {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
  }

  .deliveryDate {
    font-size: 16px;
    font-weight: bold;
    color: #030303;
    display: block;
  }

  .productName {
    width: fit-content;
    margin-left: 7px;
    font-size: 16px;
    font-weight: bold;
  }

  .vendor {
    font-size: 14px;
    color: #777;
  }

  .currentPrice {
    font-size: 18px;
    font-weight: bold;
  }

  .oldPrice {
    font-size: 14px;
    text-decoration: line-through;
    color: #888;
  }

  .deleteIcon {
    cursor: pointer;
    color: #999;
    font-size: 25px;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .deliveredProductImage {
      width: 90%;
      max-height: 280px;
      height: 400px;
    }
    .productImage {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;
