import styled from "styled-components";

export const HomeCarusel = styled.div`
  #caruselImg {
    width: 100%;
    height: 350px;
    border-radius: 10px;
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .buttons__wrapper {
      display: block;
    }
  }
`;

export const ButtonGroupStyle = styled.div`
  display: flex;
  margin-top: 20px;
  button {
    border: none;
    margin: 5px 20px;
    width: 300px;
    height: 60px;
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.179);
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    button {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    button {
      font-size: 11px;
      margin: 3px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    div {
      display: block;
    }
    button {
      width: 100%;
      margin: 10px auto;
    }
  }
`;
export const ProductStyle = styled.div`
  .showAgainBtn {
    display: block;
    min-width: 200px;
    max-width: 100%;
    width: 100%;
    font-size: 16px;
    margin: 15px auto;
    padding: 10px;
    text-transform: capitalize;
    color: rgb(35, 35, 35);
    background-color: rgba(128, 128, 128, 0.179);
    border-radius: 8px;
  }
`;
