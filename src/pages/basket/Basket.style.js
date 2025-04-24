import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  max-width: 60%;
  border: 1px solid rgba(106, 105, 105, 0.26);
  border-radius: 16px;
  padding: 16px;
  background: #fff;
`;

export const OverAllInfo = styled.div`
  width: 100%;
  max-width: 340px;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  font-family: "Arial", sans-serif;

  .deliverState {
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 16px;
    gap: 10px;
    margin-bottom: 16px;
    align-items: center;
  }
`;

export const DeliveryInfo = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;

  .deliviryDate {
    text-align: center;
    color: #7c3aed;
    font-weight: 500;
    background: #f5f3ff;
    border: 1px solid #ddd6fe;
    border-radius: 8px;
    padding: 8px;
    font-size: 14px;
    margin: 16px 0;
  }

  .resultSum {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #111827;
  }

  .benefit {
    color: #10b981;
    font-size: 14px;
    text-align: center;
    margin-bottom: 16px;
  }
`;
