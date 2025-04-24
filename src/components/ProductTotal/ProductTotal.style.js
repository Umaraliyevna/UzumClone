import styled from "styled-components";

export const QuantityContainerStyle = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;

  .quantityControl {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 5px;
  }

  .quantityControl button {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    padding-top: 0;
    margin-top: 0;
    font-size: 35px;
  }

  .quantityControl span {
    font-size: 25px;
    font-weight: bold;
    padding: 0 5px;
  }

  .cartButton {
    background: rgb(39, 3, 241);
    height: 50px;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .hiddenButton {
    display: none;
  }
`;
