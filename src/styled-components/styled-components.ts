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
height: 60px;
padding: 10px;
color: white;
`

export const Title = styled.h1`
pointer-events: none;
width: 100%;
padding-bottom: 10px;
text-align: center;
border-bottom: 1px solid darkGray;
`;

export const FeedWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 5%;
`

export const Alert = styled.div`
text-align: center
`

export const CardWrapper = styled.div`
background: lightGray;
text-align: left;
padding: 1%;
border-radius: 5px;
margin-bottom: 2%;
`
export const Meta = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 2%;
`