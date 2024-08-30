import { livros } from "./dadosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../imagens/livro2.png'
import styled from "styled-components";

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    
    img {
        cursor: pointer;
    }
`

function Lancamentos() {
  return (
    <LancamentosContainer>
        <Titulo 
            cor="#EB9B00"
            tamanhoFonte="36px"
            alinhamento="center"
        >
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
            { livros.map( livro => (
                <img src={livro.src}/>
            ) ) }
        </NovosLivrosContainer>
        <CardRecomenda
            titulo="Talvez você se interesse por"
            subtitulo="Angular 11"
            descricao="Construindo uma aplicação com a plataforma Google"
            img={imagemLivro}
        />
    </LancamentosContainer>
  );
}

export default Lancamentos;