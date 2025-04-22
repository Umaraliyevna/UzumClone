import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 70%;
  border: 1px solid rgba(106, 105, 105, 0.26);
`;
export const OverAllInfo = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;

  .deliverState {
    background: #f9f9fb;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 16px;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 16px;
  }
`;

export const DeliveryInfo = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;

  .deliviryDate {
    text-align: center;
    color: #a155e5;
    font-weight: 500;
    border: 1px solid #a155e5;
    border-radius: 8px;
    padding: 6px;
    font-size: 13px;
    margin-bottom: 14px;
  }

  .resultSum {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .benefit {
    color: #2e9b4d;
    font-size: 13px;
    text-align: center;
    margin-bottom: 16px;
  }
`;
