import styled, { css } from "styled-components";

export const ThemeH3 = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(${(props) => props.color});
`;
export const ThemeH2 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: var(${(props) => props.color});
`;
export const ThemeH1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: var(${(props) => props.color});
`;
export const ThemeP = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: var(${(props) => props.color});
`;
export const ThemePBold = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: var(${(props) => props.color});
`;

export const ThemePItalic = styled.p`
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(${(props) => props.color});
`;
