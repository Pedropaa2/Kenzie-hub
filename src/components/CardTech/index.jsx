import { StyledLi } from "./styledLi";
import { ThemeH2, ThemeP } from "../../styles/typography";

export function LiFunction({ title, status, id, open }) {
  return (
    <StyledLi id={id} onClick={open} title={title}>
      <ThemeH2 id={id} title={title}>
        {" "}
        {title}{" "}
      </ThemeH2>
      <ThemeP id={id} title={title}>
        {" "}
        {status}{" "}
      </ThemeP>
    </StyledLi>
  );
}
