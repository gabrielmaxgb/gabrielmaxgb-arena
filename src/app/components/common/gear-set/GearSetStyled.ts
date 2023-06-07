import styled from "@emotion/styled";

export const GearSetContainer = styled.div`
  display: grid;
  grid-template-rows: 70px 70px 70px;
  grid-template-columns: 70px 70px 70px;

  .gear-slot {
    background: #cbac64;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    margin: 0.2rem;
  }
`;
