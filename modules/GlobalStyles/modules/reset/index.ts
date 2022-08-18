import { css } from "styled-components";
import ress from "ress";

export const reset = css`
  ${ress}
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
  li {
    list-style: none;
  }
`;
