import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}`

export const AppWrapper = styled.div`
text-align: center
`

export const HeaderWrapper = styled.header`
text-align: center;
background-color: #222;
height: 70px;
padding: 20px;
color: white;
`

export const Title = styled.h1`
pointer-events: none;
`;