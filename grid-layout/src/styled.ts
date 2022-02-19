import styled from 'styled-components'

export const MainPage = styled.div`
  display: grid;
  grid-template-columns: 322px auto;
  grid-template-rows: 56px calc(100vh - 56px);
  grid-template-areas: 
  'a a a a'
  'b c c c';
`

export const Header = styled.div`
  grid-area: a;
  /* background-color: red; */
  border: 1px solid red;
  /* text-align: center; */
`

export const Menu = styled.div`
  grid-area: b;
  /* background-color: green; */
  border: 1px solid green;
  text-align: center;
  padding-top: 400px;
`

export const RoutePage = styled.div`
  grid-area: c;
  /* background-color: blue; */
  border: 1px solid blue;
  text-align: center;
`

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
  border: 1px solid yellow;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const PageHeader = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: purple; */
  border: 1px solid purple;
  text-align: left;
`

export const PageMain = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto 300px; 
  margin-top: 20px;
  /* background-color: purple; */
  border: 1px solid purple;
  text-align: center;
`

export const PageMainContent = styled.div`
  /* background-color: black; */
  border: 1px solid black;
  text-align: center;
  padding-top: 300px;
`

export const PageMainAside = styled.div`
  /* background-color: azure; */
  border: 1px solid azure;
  text-align: center;
  padding-top: 300px;
`