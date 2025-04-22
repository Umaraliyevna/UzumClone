import styled from "styled-components";

export const ProductCardStyle = styled.div`
  width: 100%;
  border-radius: 10px;
  margin: 13px;
  transition: 0.3s;
  position: relative;
  .productLink {
    text-decoration: none;
    color: black;
  }

  img {
    width: 100%;
    height: 309px;
    border-radius: 10px;
  }

  .productHeart {
    position: absolute;
    left: 180px;
    top: 25px;
    font-size: 20px;
    z-index: 1;
  }

  .productText {
    background-color: rgba(81, 44, 249, 0.768);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    padding-bottom: 3px;
    color: white;
    position: absolute;
    top: 275px;
    left: 10px;
  }
`;

export const ProductInfo = styled.div`
  padding: 5px;

  .productInfoDescription {
    padding: 2px 5px;
    font-weight: 600;
    padding: 0;
    margin: 0;
  }

  #productStar {
    color: orange;
    font-size: 12px;
  }
  .permonthSumma {
    font-size: 12px;
    background-color: rgb(255, 247, 0);
    border-radius: 5px;
    margin-top: 3px;
    width: fit-content;
  }

  .productCost p {
    margin: 0;
    padding: 0;
  }

  .realSumma {
    font-size: 14px;
    font-weight: 600;
  }

  .changedSumma {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.536);
    font-size: 13px;
  }

  .price-bag-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 16px;
  }

  .price-bag-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 20px;
    margin-top: auto;
  }

  .bag {
    border-radius: 50%;
    font-size: 30px;
    padding: 5px;
    border: 0.5px solid rgba(0, 0, 0, 0.601);
    flex-shrink: 0;
  }
`;
