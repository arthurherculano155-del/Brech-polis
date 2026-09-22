import './Conjuntos.scss';
import { useState } from 'react';

import Menu from '../../Components/Shared/Menu/menu.jsx';
import Rodape from '../../Components/Shared/Rodape/rodape.jsx';

export default function Conjuntos() {
    const [valor, setValor] = useState("");
    const [parcelas, setParcelas] = useState("");

    const [valorParcela, setValorParcela] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const [juros, setJuros] = useState(0);

    const [erro, setErro] = useState("");

    const produtos = [
        {
            destaque: "EM ALTA",
            imagem: "/Assets/Images/Roupa.png",
            nome: "Urban Eclipse Set",
            descricao: "Estilo urbano que nunca sai de moda",
            preco: "R$ 182,09"
        },

        {
            destaque: "MAIS VENDIDO",
            imagem: "/Assets/Images/Roupa2.png",
            nome: "Mosshadow Motion Set",
            descricao: "Conforto e movimento para seu dia",
            preco: "R$ 190,90"
        },

        {
            destaque: "NOVO",
            imagem: "/Assets/Images/Roupa3.png",
            nome: "Shadow Motion Set",
            descricao: "Leveza e atitude a qualquer momento",
            preco: "R$ 150,00"
        }
    ];

    function calcular() {
        const quantidadeParcelas = Number(parcelas);
        const valorCompra = Number(valor);

        if (
            quantidadeParcelas <= 0 ||
            quantidadeParcelas > 20 ||
            !Number.isInteger(quantidadeParcelas)
        ) {
            setErro("Insira um número válido de parcelas.");
            setValorParcela(0);
            setValorTotal(0);
            setJuros(0);

            return;
        }

        if (valorCompra <= 0) {
            setErro("Insira um valor de compra válido.");
            setValorParcela(0);
            setValorTotal(0);
            setJuros(0);

            return;
        }

        setErro("");

        let taxaJuros = 0;

        if (quantidadeParcelas >= 20) {
            taxaJuros = 0.5;
        } else if (quantidadeParcelas >= 15) {
            taxaJuros = 0.25;
        } else if (quantidadeParcelas >= 10) {
            taxaJuros = 0.15;
        } else if (quantidadeParcelas >= 5) {
            taxaJuros = 0.05;
        }

        let total = valorCompra;
        let parcela = valorCompra / quantidadeParcelas;

        if (taxaJuros > 0) {
            total += total * taxaJuros;
            parcela += parcela * taxaJuros;
        }

        const parcelaFinal =
            Math.trunc(parcela * 100) / 100;

        const totalFinal =
            Math.trunc(total * 100) / 100;

        setValorParcela(parcelaFinal);
        setValorTotal(totalFinal);
        setJuros(taxaJuros);
    }

    function limpar() {
        setValor("");
        setParcelas("");

        setValorParcela(0);
        setValorTotal(0);
        setJuros(0);

        setErro("");
    }

    function formatarDinheiro(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function apertarEnter(e) {
        if (e.key === "Enter") {
            calcular();
        }
    }

    return (
        <div className="Conjuntos">

            <Menu />

            <main className="tela">

                <section className="apresentacao-conjuntos">

                    <span className="mini-titulo">
                        BRECHÓPOLIS
                    </span>

                    <h1>
                        Conjuntos <span>Exclusivos</span>
                    </h1>

                    <p>
                        Estilo, conforto e personalidade em cada combinação.
                    </p>

                </section>


                <section className="lista-conjuntos">

                    {produtos.map((produto, index) => (
                        <div
                            className="produto"
                            key={index}
                        >

                            <div className="imagem-produto">

                                <span className="destaque">
                                    {produto.destaque}
                                </span>

                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                />

                            </div>

                            <div className="produto-info">

                                <h2>
                                    {produto.nome}
                                </h2>

                                <p>
                                    {produto.descricao}
                                </p>

                                <h5 className="preco">
                                    {produto.preco}
                                </h5>

                            </div>

                        </div>
                    ))}

                </section>


                <section className="calcular">

                    <div className="calcular-apresentacao">

                        <div className="calculadora-titulo">

                            <i className="fa-solid fa-calculator"></i>

                            <span>
                                CALCULADORA
                            </span>

                        </div>

                        <div className="informacao">

                            <h1>
                                Parcelar em quantas vezes?
                            </h1>

                            <p>
                                Simule sua compra e descubra o valor
                                das parcelas e dos juros.
                            </p>

                        </div>

                        <div className="limites">

                            <div>
                                <span>01 — 04x</span>
                                <p>Sem juros</p>
                            </div>

                            <div>
                                <span>05 — 09x</span>
                                <p>5% de juros</p>
                            </div>

                            <div>
                                <span>10 — 14x</span>
                                <p>15% de juros</p>
                            </div>

                            <div>
                                <span>15 — 19x</span>
                                <p>25% de juros</p>
                            </div>

                            <div>
                                <span>20x</span>
                                <p>50% de juros</p>
                            </div>

                        </div>

                    </div>


                    <div
                        className="calculo"
                        onKeyDown={apertarEnter}
                    >

                        <div className="calculacao">

                            <label htmlFor="valor">
                                Valor da Compra
                            </label>

                            <div className="input-container">

                                <span>R$</span>

                                <input
                                    type="number"
                                    id="valor"
                                    value={valor}
                                    min="0"
                                    step="0.01"
                                    placeholder="Ex: 250"
                                    onChange={(e) =>
                                        setValor(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        <div className="calculacao">

                            <label htmlFor="parcelas">
                                Número de Parcelas
                            </label>

                            <div className="input-container">

                                <i className="fa-regular fa-credit-card"></i>

                                <input
                                    type="number"
                                    id="parcelas"
                                    value={parcelas}
                                    min="1"
                                    max="20"
                                    step="1"
                                    placeholder="Ex: 5"
                                    onChange={(e) =>
                                        setParcelas(e.target.value)
                                    }
                                />

                            </div>

                        </div>


                        <div className="acoes">

                            <button
                                type="button"
                                className="btn-calcular"
                                onClick={calcular}
                            >
                                <i className="fa-solid fa-calculator"></i>

                                Calcular
                            </button>

                            <button
                                type="button"
                                className="btn-limpar"
                                onClick={limpar}
                            >
                                Limpar
                            </button>

                        </div>

                    </div>


                    <div className="final">

                        <div className="cardd">

                            <div className="resultado-icon">
                                <i className="fa-regular fa-circle-check"></i>
                            </div>

                            <div className="resultado-info">

                                <span>
                                    Valor da parcela
                                </span>

                                {erro ? (
                                    <p className="resultado erro">
                                        {erro}
                                    </p>
                                ) : (
                                    <p className="resultado sucesso">
                                        {formatarDinheiro(valorParcela)}
                                    </p>
                                )}

                            </div>

                        </div>


                        <div className="cardd">

                            <div className="resultado-icon">
                                <i className="fa-solid fa-wallet"></i>
                            </div>

                            <div className="resultado-info">

                                <span>
                                    Valor Total
                                </span>

                                <p className="resultado sucesso">
                                    {formatarDinheiro(valorTotal)}
                                </p>

                            </div>

                        </div>


                        <div className="cardd">

                            <div className="resultado-icon">
                                <i className="fa-solid fa-percent"></i>
                            </div>

                            <div className="resultado-info">

                                <span>
                                    Juros
                                </span>

                                <p
                                    className={
                                        juros > 0
                                            ? "resultado juros-com"
                                            : "resultado juros-sem"
                                    }
                                >
                                    {juros * 100}%
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Rodape />

        </div>
    );
}