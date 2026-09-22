import './Home.scss';
import { Link } from 'react-router-dom';

import Menu from '../../Components/Shared/Menu/menu.jsx';
import Rodape from '../../Components/Shared/Rodape/rodape.jsx';

export default function Home() {

    const beneficios = [
        {
            icone: "fa-solid fa-truck-fast",
            titulo: "Frete Rápido",
            descricao: "Entregas para todo Brasil"
        },
        {
            icone: "fa-solid fa-shield-halved",
            titulo: "Segurança",
            descricao: "Seus dados protegidos"
        },
        {
            icone: "fa-solid fa-money-bill-trend-up",
            titulo: "Troca Fácil",
            descricao: "Até 7 dias para trocas"
        },
        {
            icone: "fa-solid fa-headset",
            titulo: "Atendimento",
            descricao: "Suporte via WhatsApp"
        }
    ];

    const produtos = [
        {
            id: 1,
            nome: "Eclipse Wear Essential Black",
            descricao: "Corte clássico, tecido macio e caimento confortável.",
            preco: "129,90",
            imagem: "/Assets/Images/Camisa2.png",
            rota: "/produto/eclipse-wear"
        },
        {
            id: 2,
            nome: "Essential Moss Streetwear Club",
            descricao: "Toque macio e corte moderno, perfeita para looks casuais.",
            preco: "149,90",
            imagem: "/Assets/Images/Camisa3.png",
            rota: "/produto/essential-moss"
        },
        {
            id: 3,
            nome: "Midnight Drift Urban Wear Club",
            descricao: "Design minimalista com acabamento premium para uso diário.",
            preco: "159,90",
            imagem: "/Assets/Images/Camisa4.png",
            rota: "/produto/midnight-drift"
        },
        {
            id: 4,
            nome: "Urban Phantom Cargo Pants",
            descricao: "Bolsos utilitários e corte confortável para o dia a dia.",
            preco: "219,90",
            imagem: "/Assets/Images/Calca.png",
            rota: "/produto/urban-phantom"
        },
        {
            id: 5,
            nome: "Adidas Shadow Motion Pants",
            descricao: "Tecido leve com elasticidade para liberdade de movimento.",
            preco: "189,90",
            imagem: "/Assets/Images/Calca2.png",
            rota: "/produto/adidas-shadow"
        },
        {
            id: 6,
            nome: "Concrete Flow Wide Pants",
            descricao: "Modelagem ampla para conforto e estilo contemporâneo.",
            preco: "167,67",
            imagem: "/Assets/Images/Calca3.png",
            rota: "/produto/concrete-flow"
        }
    ];

    return (
        <div className="Inicio">

            <Menu />

            <main className="tela">

                <section className="foto">

                    <div className="text">

                        <h1 className="dest">
                            MODA CONSCIENTE
                        </h1>

                        <h1>
                            MODA CONSCIENTE, ACHADOS INCRÍVEIS E ESTILO
                            <br />

                            <span>
                                ÚNICO EM CADA DETALHE
                            </span>
                        </h1>

                        <p>
                            Peças selecionadas com curadoria para seu estilo
                            com mais autenticidade.
                        </p>

                        <Link
                            to="/vermais"
                            className="seemore"
                        >
                            VER MAIS
                        </Link>

                    </div>

                    <div className="rou">
                        <img
                            src="/Assets/Images/Camisa.png"
                            alt="Camisa em destaque"
                        />
                    </div>

                </section>


                <section className="container">

                    {beneficios.map((beneficio, index) => (
                        <div
                            className="card"
                            id={index === beneficios.length - 1 ? "noBorder" : ""}
                            key={index}
                        >

                            <i className={beneficio.icone}></i>

                            <div className="text">

                                <h1>
                                    {beneficio.titulo}
                                </h1>

                                <p>
                                    {beneficio.descricao}
                                </p>

                            </div>

                        </div>
                    ))}

                </section>


                <div className="contt">

                    <h1 className="oii">
                        PEÇAS EM <span>DESTAQUE</span>
                    </h1>

                    <p className="inff">
                        Selecionamos as melhores peças para você!
                    </p>

                </div>


                <section className="info">

                    {produtos.map((produto) => (
                        <Link
                            to={produto.rota}
                            key={produto.id}
                        >
                            <div className="CONJ">

                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                />

                                <div className="card-content">

                                    <h2 className="infor">
                                        {produto.nome}
                                    </h2>

                                    <p className="desc">
                                        {produto.descricao}
                                    </p>

                                    <p className="price">
                                        R$ {produto.preco}
                                    </p>

                                </div>

                            </div>

                        </Link>
                    ))}

                </section>

                <Rodape />

            </main>

        </div>
    );
}