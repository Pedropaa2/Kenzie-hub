import styled from "styled-components";

export const StyledLi = styled.li`
  width: 95%;
  min-height: 49px;
  height: 49px;
  background-color: var(--Grey-01);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  cursor: pointer;
  :hover {
    background-color: var(--Grey-03);
  }
  h2 {
    color: var(--Grey-05);
    margin-left: 15px;
  }
  p {
    color: var(--Grey-04);
    margin-right: 15px;
  }
`;
