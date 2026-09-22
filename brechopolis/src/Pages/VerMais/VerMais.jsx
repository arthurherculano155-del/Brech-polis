import './VerMais.scss';
import { Link } from 'react-router-dom';

export default function VerMais() {

    const diferenciais = [
        {
            icone: "fa-solid fa-shirt",
            texto: "Moda consciente com atitude"
        },
        {
            icone: "fa-solid fa-building",
            texto: "Estilo urbano e autêntico"
        },
        {
            icone: "fa-solid fa-magnifying-glass",
            texto: "Achados incríveis selecionados"
        },
        {
            icone: "fa-solid fa-heart",
            texto: "Qualidade e conforto em cada detalhe"
        }
    ];

    const feedbacks = [
        {
            texto: "As peças são muito estilosas e chegaram em perfeito estado. Dá pra perceber o cuidado em cada detalhe.",
            nome: "Lucas M."
        },
        {
            texto: "Achei roupas que eu nunca encontraria em lojas comuns. O estilo urbano daqui é diferenciado.",
            nome: "Mariana S."
        },
        {
            texto: "Além de lindas, as roupas têm muita qualidade. Virei cliente fixa da Brechópolis.",
            nome: "Ana Clara."
        },
        {
            texto: "Curti muito a proposta sustentável da marca. Comprar aqui faz diferença e ainda rende looks incríveis.",
            nome: "Rafael P."
        }
    ];

    return (
        <div className="VerMais">

            <main className="all">

                <section className="hero">

                    <h1>Sobre Nós</h1>

                    <p className="subtitle">
                        A Brechópolis nasceu com a ideia de unir estilo,
                        autenticidade e consumo consciente em um só lugar.
                    </p>

                </section>


                <section className="historia">

                    <p>
                        Nosso objetivo é oferecer peças únicas, modernas e
                        cheias de personalidade para quem quer se vestir bem
                        sem abrir mão da originalidade. Selecionamos
                        cuidadosamente cada item para garantir qualidade,
                        conforto e identidade urbana em cada detalhe.
                    </p>

                </section>


                <div className="separador"></div>


                <section className="diferenciais">

                    <h2>Nosso Brechó tem:</h2>

                    <div className="lista">

                        {diferenciais.map((item, index) => (

                            <div
                                className="item"
                                key={index}
                            >

                                <div className="icone">

                                    <i className={item.icone}></i>

                                </div>

                                <p>
                                    {item.texto}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>


                <div className="separador"></div>


                <section className="missao">

                    <h2>Nossa Missão</h2>

                    <div className="missao-texto">

                        <p>
                            Na Brechópolis, nossa missão é transformar a forma
                            como as pessoas enxergam a moda. Acreditamos que
                            estilo e consciência podem caminhar juntos, por isso
                            buscamos oferecer peças únicas, modernas e cheias de
                            personalidade sem incentivar o consumo exagerado.
                        </p>

                        <p>
                            Queremos criar um espaço onde cada roupa tenha uma
                            nova história, valorizando a autenticidade, a
                            criatividade e a sustentabilidade. Cada peça
                            selecionada representa uma oportunidade de expressão
                            individual, permitindo que nossos clientes montem
                            looks originais e urbanos gastando menos e consumindo
                            de maneira mais inteligente.
                        </p>

                        <p>
                            Mais do que vender roupas, a Brechópolis busca
                            construir uma comunidade apaixonada por moda,
                            atitude e inovação, mostrando que o brechó pode ser
                            sinônimo de qualidade, tendência e exclusividade.
                        </p>

                    </div>

                </section>


                <div className="separador"></div>


                <section className="feedback">

                    <h2>Feedbacks dos clientes</h2>

                    <div className="comentarios">

                        {feedbacks.map((feedback, index) => (

                            <div
                                className="comentario"
                                key={index}
                            >

                                <i className="fa-solid fa-quote-left"></i>

                                <p>
                                    {feedback.texto}
                                </p>

                                <span>
                                    — {feedback.nome}
                                </span>

                            </div>

                        ))}

                    </div>

                </section>

            </main>


            <Link
                to="/"
                className="topo-btn"
            >
                <i className="fa-solid fa-arrow-left"></i>

                Voltar ao início
            </Link>

        </div>
    );
}