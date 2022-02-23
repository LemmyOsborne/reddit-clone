import type { AppProps } from "next/app"
import Head from "next/head"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/global-styles"
import { darkTheme } from "../styles/theme/dark-theme"
import { lightTheme } from "../styles/theme/light-theme"


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Head>
        <title>Reddit Clone</title>
      </Head>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
