import './Retirada.scss';
import { useState } from 'react';

import Menu from '../../Components/Shared/Menu/menu.jsx';
import Rodape from '../../Components/Shared/Rodape/rodape.jsx';

export default function Retirada() {
    const [nome, setNome] = useState("");
    const [pedido, setPedido] = useState("");
    const [data, setData] = useState("");

    function confirmarRetirada(e) {
        e.preventDefault();

        const dados = {
            nome,
            pedido,
            data
        };

        console.log(dados);

        setNome("");
        setPedido("");
        setData("");
    }

    const informacoes = [
        {
            icone: "fa-regular fa-clock",
            titulo: "Retirada rápida",
            texto: "Retirada disponível em até 24h úteis."
        },

        {
            icone: "fa-solid fa-location-dot",
            titulo: "Retirada presencial",
            texto: "Retire sua peça presencialmente em São Paulo."
        },

        {
            icone: "fa-regular fa-circle-check",
            titulo: "Confira sua peça",
            texto: "Confira a peça no ato da retirada."
        },

        {
            icone: "fa-solid fa-rotate-left",
            titulo: "Atenção",
            texto: "Produtos retirados não poderão ser trocados."
        }
    ];

    return (
        <div className="Retirada">

            <Menu />

            <main className="tela">

                <section className="apresentacao-retirada">

                    <span className="tag">
                        RETIRADA
                    </span>

                    <h1>
                        Retire sua compra com
                        <span> praticidade</span>
                    </h1>

                    <p>
                        Agende sua retirada e escolha a melhor data
                        para buscar sua peça.
                    </p>

                </section>


                <section className="retirada-container">

                    <div className="formulario">

                        <div className="formulario-titulo">

                            <div className="titulo-icone">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>

                            <div>
                                <h2>
                                    Agendar retirada
                                </h2>

                                <p>
                                    Preencha seus dados para reservar
                                    a retirada do pedido.
                                </p>
                            </div>

                        </div>


                        <div className="aviso">
                            <i className="fa-regular fa-clock"></i>

                            <p>
                                O pedido ficará disponível por até
                                <strong> 5 dias úteis </strong>
                                após a confirmação.
                            </p>
                        </div>


                        <form onSubmit={confirmarRetirada}>

                            <div className="campo">

                                <label htmlFor="nome">
                                    Nome completo
                                </label>

                                <div className="input-container">

                                    <i className="fa-regular fa-user"></i>

                                    <input
                                        type="text"
                                        id="nome"
                                        value={nome}
                                        placeholder="Digite seu nome completo"
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            <div className="campo">

                                <label htmlFor="pedido">
                                    Número do pedido
                                </label>

                                <div className="input-container">

                                    <i className="fa-solid fa-receipt"></i>

                                    <input
                                        type="text"
                                        id="pedido"
                                        value={pedido}
                                        placeholder="Ex: #1025"
                                        onChange={(e) =>
                                            setPedido(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            <div className="campo">

                                <label htmlFor="data">
                                    Data da retirada
                                </label>

                                <div className="input-container">

                                    <i className="fa-regular fa-calendar"></i>

                                    <input
                                        type="date"
                                        id="data"
                                        value={data}
                                        onChange={(e) =>
                                            setData(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            <button
                                type="submit"
                                className="env"
                            >
                                <i className="fa-solid fa-check"></i>

                                Confirmar retirada
                            </button>

                        </form>

                    </div>


                    <div className="informacoes-retirada">

                        <div className="informacoes-titulo">
                            <span>
                                INFORMAÇÕES
                            </span>

                            <h2>
                                Antes de retirar
                            </h2>

                            <p>
                                Confira algumas informações importantes
                                sobre sua retirada.
                            </p>
                        </div>


                        <div className="cards-informacoes">

                            {informacoes.map((informacao, index) => (

                                <div
                                    className="card-informacao"
                                    key={index}
                                >

                                    <div className="icone">
                                        <i className={informacao.icone}></i>
                                    </div>

                                    <div className="texto">
                                        <h3>
                                            {informacao.titulo}
                                        </h3>

                                        <p>
                                            {informacao.texto}
                                        </p>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            </main>

            <Rodape />

        </div>
    );
}