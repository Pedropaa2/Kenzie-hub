import { StyledLi } from "./styledLi";
import { ThemeH2, ThemeP } from "../../Styles/typography";

export function LiFunction({ title, status, id, open }) {
  return (
    <StyledLi id={id} onClick={open} title={title}>
      <ThemeH2> {title} </ThemeH2>
      <ThemeP> {status} </ThemeP>
    </StyledLi>
  );
}
