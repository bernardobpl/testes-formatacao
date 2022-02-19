import styled from 'styled-components'

export const AppWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: red;
  display: grid;
  grid-template-columns: 300px calc(100% - 300px);
  grid-template-rows: 50px calc(100% - 50px);
  grid-template-areas: 
  'header header'
  'menu page';
`

export const Header = styled.nav`
  grid-area: header;
  border: 1px solid black;
`

export const Menu = styled.aside`
  grid-area: menu;
  border: 1px solid black;
`

export const Page = styled.main`
  grid-area: page;
  border: 1px solid black;
  background: yellow;
  display: flex;
`

export const ExtractPage = styled.div`
  flex: 1;
  background: blue;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ExtractContent = styled.div`
  flex: 1;
  overflow: auto;
  background: green;
`