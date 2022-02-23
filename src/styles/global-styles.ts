
import { createGlobalStyle } from "styled-components";
import { lightTheme } from "./theme/light-theme"
import { darkTheme } from "./theme/dark-theme"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.text};
    font-family: "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", 
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif";
    font-size: 16px;
  }
 
  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
  color: inherit;
  text-decoration: none;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export { GlobalStyles }