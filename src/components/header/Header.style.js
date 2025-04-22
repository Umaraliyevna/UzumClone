import styled from "styled-components";

export const HeaderStyle = styled.div`
  .headerWrapper {
    background-color: rgba(212, 213, 215, 0.449);
    padding: 0 10px;
  }

  .headerFlag {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .link {
    text-decoration: none;
  }

  .headerList {
    display: flex;
    padding: 0;
  }

  .headerListItem {
    display: inline;
    width: auto;
    padding-left: 0;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .headerWrapper {
      margin: 0 auto;
    }

    .homeActions p {
      display: none;
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 992px) {
    .headerWrapper {
      margin: 0 auto;
    }

    .homeActions p {
      display: none;
    }
    .headerListItem {
      padding: 5px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    .homeActions p {
      display: none;
    }
    .headerWrapper {
      display: none;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .homeActions p {
      display: none;
    }
    .headerWrapper {
      display: none;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .homeActions p {
      display: none;
    }
    .headerWrapper {
      display: none;
    }
  }
`;

export const HeaderPartStyle = styled.div`
  padding: 0 10px;
  .mainList {
    display: flex;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .mainListItem {
    display: inline;
    width: auto;
    padding-left: 0;
    margin: 0 3px;
  }
  .downloadBtn {
    display: none;
  }
  .homeLogo {
    width: 40px;
    height: 40px;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .homeTitle {
    font-size: 22px;
    font-weight: bold;
    color: #7000ff;
    display: inline;
  }
  .downloadMessage {
    display: none;
  }
  .homeBtn {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #e5e5ff;
    margin-right: 20px;
    color: #8753ff;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .catalogTitle {
    font-size: 14px;
    display: block;
    text-transform: capitalize;
  }

  .catalogIcon {
    font-size: 20px;
  }

  .homeSearching {
    position: relative;
    flex-grow: 1;
  }

  .homeSearching input {
    width: 300px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
    padding: 0 15px;
    padding-right: 50px;
    font-size: 16px;
    outline: none;
  }

  .homeSearching input:focus {
    border-color: #7000ff;
  }

  .homeSearchingIcon {
    position: absolute;
    background-color: #edeff2;
    font-size: 25px;
    right: 43px;
    top: 9px;
    padding: 7.5px 13px;
    color: #555;
    cursor: pointer;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .homeActions {
    padding: 0 10px;
    align-items: center;
    color: #555;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
  }

  .homeActions:hover {
    color: #7000ff;
  }

  .homeActionsIcon {
    font-size: 20px;
    margin-right: 5px;
  }

  .homeItems {
    display: flex;
    gap: 5px;
    list-style-type: none;
    padding: 0;
  }

  #homeItems::-webkit-scrollbar {
    display: none;
  }

  .homeProducts {
    margin: 0 15px;
    color: #555;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    padding: 5px 0;
    text-align: center;
  }

  .homeProducts:hover {
    color: #7000ff;
  }

  .homeProducts img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    vertical-align: middle;
  }

  .takedItems {
    background-color: #7000ff;
    border-radius: 50%;
    border: none;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-left: 5px;
  }

  .basket {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    height: 40px;
    padding: 0 5px;
    position: relative;
  }

  .basket:hover {
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .homeProducts {
      margin: 0 10px;
    }

    .mainListItem {
      margin: 0 auto;
    }
    .homeProducts {
      margin: 0 8px;
      font-size: 13px;
    }
  }
  @media only screen and (min-width: 900px) and (max-width: 992px) {
    .homeProducts {
      margin: 0 10px;
    }

    .mainListItem {
      margin: 0 auto;
    }
    .homeProducts {
      margin: 0 3px;
      font-size: 13px;
    }
    .listItemCatalog {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    .homeItems,
    .homeActions,
    .listItemCatalog {
      display: none;
    }
    .mainList {
      display: block;
    }
    .downloadBtn {
      display: block;
    }
    .downloadMessage {
      display: block;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    .homeItems,
    .homeActions,
    .listItemCatalog {
      display: none;
    }
    .mainList {
      display: block;
    }
    .downloadBtn {
      display: block;
    }
    .downloadMessage {
      display: block;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    .homeItems,
    .homeActions,
    .listItemCatalog {
      display: none;
    }
    .mainList {
      display: block;
    }
    .downloadBtn {
      display: block;
    }
    .downloadMessage {
      display: block;
    }
  }
`;
