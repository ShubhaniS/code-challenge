import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 18px;
  padding: 12px;
`;

export const ListWrapper = styled.div`
  background-color: rgb(228, 214, 214);
  padding: 18px;
  border-radius: 7px;
  text-align: center;
  font-size: 1.4em;
  font-weight: bold;
  box-shadow: 0 4px 7.5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: rgb(205, 171, 171);
  }
`;
