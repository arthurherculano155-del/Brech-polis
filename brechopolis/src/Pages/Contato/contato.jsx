import './contato.scss';
import { useState } from 'react';

import Menu from '../../Components/Shared/Menu/menu.jsx';
import Rodape from '../../Components/Shared/Rodape/rodape.jsx';

export default function Contato() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    function enviarFormulario(e) {
        e.preventDefault();

        const dados = {
            nome,
            senha,
            email
        };

        console.log(dados);

        setNome("");
        setSenha("");
        setEmail("");
    }

    return (
        <div className="Contato">

            <Menu />

            <main className="tela">

                <section
                    className="apresentacao"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(255, 255, 255, 0.80),
                                rgba(255, 255, 255, 0.92)
                            ),
                            url("/Assets/Images/Roupa.png")
                        `
                    }}
                >

                    <div className="apresentacao-conteudo">

                        <span className="tag">
                            FALE COM A GENTE
                        </span>

                        <h1>
                            Entre em <span>Contato</span>
                        </h1>

                        <p>
                            Tem alguma dúvida, sugestão ou quer saber mais
                            sobre nossas peças? Estamos aqui para ajudar.
                        </p>

                    </div>

                </section>


                <section className="contato">

                    <div className="formulario">

                        <div className="formulario-titulo">

                            <div className="titulo-icone">
                                <i className="fa-regular fa-envelope"></i>
                            </div>

                            <div>
                                <h2>Envie uma mensagem</h2>

                                <p>
                                    Preencha os campos abaixo para entrar
                                    em contato conosco.
                                </p>
                            </div>

                        </div>


                        <form onSubmit={enviarFormulario}>

                            <div className="campo">

                                <label htmlFor="nome">
                                    Nome
                                </label>

                                <div className="input-container">

                                    <i className="fa-regular fa-user"></i>

                                    <input
                                        type="text"
                                        id="nome"
                                        value={nome}
                                        placeholder="Digite seu nome"
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            <div className="campo">

                                <label htmlFor="senha">
                                    Senha
                                </label>

                                <div className="input-container">

                                    <i className="fa-solid fa-lock"></i>

                                    <input
                                        type="password"
                                        id="senha"
                                        value={senha}
                                        placeholder="Digite sua senha"
                                        onChange={(e) =>
                                            setSenha(e.target.value)
                                        }
                                    />

                                </div>

                            </div>


                            <div className="campo">

                                <label htmlFor="email">
                                    E-mail
                                </label>

                                <div className="input-container">

                                    <i className="fa-regular fa-envelope"></i>

                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        placeholder="Digite seu e-mail"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                            </div>


                            <button
                                type="submit"
                                className="env"
                            >
                                <i className="fa-solid fa-paper-plane"></i>

                                Enviar mensagem
                            </button>

                        </form>

                    </div>


                    <div className="formas">

                        <div className="formas-titulo">
                            <span>OUTRAS FORMAS</span>

                            <h2>
                                Fale com a Brechópolis
                            </h2>

                            <p>
                                Escolha a forma mais prática para
                                entrar em contato.
                            </p>
                        </div>


                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noreferrer"
                            className="botao"
                        >

                            <div className="icone whatsapp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>

                            <div className="botao-texto">
                                <span>Atendimento rápido</span>
                                <h3>WhatsApp</h3>
                            </div>

                            <i className="fa-solid fa-arrow-right seta"></i>

                        </a>


                        <a
                            href="mailto:contato@brechopolis.com"
                            className="botao"
                        >

                            <div className="icone email">
                                <i className="fa-regular fa-envelope"></i>
                            </div>

                            <div className="botao-texto">
                                <span>Envie sua mensagem</span>
                                <h3>E-mail</h3>
                            </div>

                            <i className="fa-solid fa-arrow-right seta"></i>

                        </a>


                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="botao"
                        >

                            <div className="icone instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </div>

                            <div className="botao-texto">
                                <span>Acompanhe as novidades</span>
                                <h3>Instagram</h3>
                            </div>

                            <i className="fa-solid fa-arrow-right seta"></i>

                        </a>

                    </div>

                </section>

            </main>

            <Rodape />

        </div>
    );
}