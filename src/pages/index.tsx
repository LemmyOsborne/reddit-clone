import type { NextPage } from "next"
import styled from "styled-components"

const Home: NextPage = () => {
  return <HelloWrapper>Hello</HelloWrapper>
}

export default Home

const HelloWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
