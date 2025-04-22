import styled from "styled-components";

export const Carusel = styled.div`
  .caruselCards {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .caruselCards::-webkit-scrollbar {
    display: none;
  }
`;
