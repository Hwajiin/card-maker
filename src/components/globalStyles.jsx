import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
    button {
        all: unset;
        cursor: pointer;
    }
`;

export default GlobalStyles;
