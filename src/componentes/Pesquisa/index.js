import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.div`
    color: #FFF;
    text-align: center;
    padding: 40px 0;
    width: 100vw;
    overflow: auto;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

const Titulo = styled.h1`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid transparent;
    transition: 0.3s;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value;
                    const textoMinusculo = textoDigitado.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                    const resultadoPesquisa = livros.filter(livro => livro.nomeMinusculo.includes(textoMinusculo));
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt={livro.nome} />
                </Resultado>
            ) ) }
        </PesquisaContainer>
    );
}

export default Pesquisa;