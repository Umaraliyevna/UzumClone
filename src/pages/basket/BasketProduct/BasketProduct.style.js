import styled from "styled-components";

export const BasketCardStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;

  .cart-item {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }

  .checkbox {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .product-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
  }

  .product-details {
    flex: 1;
  }

  .delivery-date {
    font-size: 16px;
    font-weight: bold;
    color: #030303;
    display: block;
  }

  .product-name {
    font-size: 16px;
    font-weight: bold;
  }

  .vendor {
    font-size: 14px;
    color: #777;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #7777774b;
    border-radius: 3px;
  }

  .quantity-control button {
    border: none;
    cursor: pointer;
    font-size: 36px;
    align-items: center;
    text-align: center;
    padding: 0px 13px;
    color: rgba(45, 44, 44, 0.292);
    background-color: #03030300;
    margin-top: -6px;
  }

  .quantity-control span {
    font-size: 16px;
    font-weight: bold;
  }

  .price-details {
    text-align: right;
    width: 100px;
  }

  .current-price {
    font-size: 18px;
    font-weight: bold;
  }

  .old-price {
    font-size: 14px;
    text-decoration: line-through;
    color: #888;
  }

  .delete-icon {
    cursor: pointer;
    color: #999;
    font-size: 25px;
  }
`;
