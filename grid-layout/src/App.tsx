import { Header, MainPage, Menu, PageHeader, PageMain, PageMainAside, PageMainContent, PageWrapper, RoutePage } from "./styled"

function App() {
  return (
      <MainPage>

        <Header> <h1> PAYFY </h1></Header>
        <Menu> MENU</Menu>

        <RoutePage>

          {/* Possível componente */}
          {/* usado nos layouts de todas */}
          {/* as páginas */}
          <PageWrapper>
            <PageHeader> <h1>PÁGINA TAL</h1> </PageHeader>
            <PageMain>
              <PageMainContent> TABELINHA </PageMainContent>
              <PageMainAside> MODAL LATERAL</PageMainAside>
            </PageMain>
          </PageWrapper>
          {/*  */}
          
        </RoutePage>

      </MainPage>
  )
}

export default App
