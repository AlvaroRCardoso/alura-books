import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import Lancamentos from './componentes/Lancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <Lancamentos />
    </AppContainer>
  );
}

export default App;
