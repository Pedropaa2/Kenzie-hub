import styled from "styled-components";

export const ThemeButton = styled.button`
  height: 38px;
  width: 90%;
  background-color: var(${(props) => props.backgroundColor});
  color: var(${(props) => props.color});
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  :hover {
    background-color: var(${(props) => props.hoverBackground});
    color: var(${(props) => props.hoverColor});
  }
`;
