import "styled-components"


declare module "styled-components" {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      success: string
      danger: string

      background: string
      text: string
    }
    
    media: {
        extraLarge: string
        large: string
        medium: string
        small: string
      }
  }
}