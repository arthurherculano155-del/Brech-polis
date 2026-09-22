import './Home.scss';
import Menu from '../../Components/Shared/Menu/menu.jsx'
import Rodape from '../../Components/Shared/Rodape/rodape.jsx';

export default function Home() {
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

                        <button
                            className="seemore"
                            onClick={() => {
                                window.location.href = "/vermais";
                            }}
                        >
                            VER MAIS
                        </button>
                    </div>

                    <div className="rou">
                        <img
                            src="/Assets/Images/Camisa.png"
                            alt="Camisa em destaque"
                        />
                    </div>

                </section>


                <section className="container">

                    <div className="card">

                        <i className="fa-solid fa-truck-fast"></i>

                        <div className="text">
                            <h1>Frete Rápido</h1>

                            <p>
                                Entregas para todo Brasil
                            </p>
                        </div>

                    </div>


                    <div className="card">

                        <i className="fa-solid fa-shield-halved"></i>

                        <div className="text">
                            <h1>Segurança</h1>

                            <p>
                                Seus dados protegidos
                            </p>
                        </div>

                    </div>


                    <div className="card">

                        <i className="fa-solid fa-money-bill-trend-up"></i>

                        <div className="text">
                            <h1>Troca Fácil</h1>

                            <p>
                                Até 7 dias para trocas
                            </p>
                        </div>

                    </div>


                    <div className="card" id="noBorder">

                        <i className="fa-solid fa-headset"></i>

                        <div className="text">
                            <h1>Atendimento</h1>

                            <p>
                                Suporte via WhatsApp
                            </p>
                        </div>

                    </div>

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

                    <a href="/produto/eclipse-wear">

                        <div className="CONJ">

                            <img
                                src="/Assets/Images/Camisa2.png"
                                alt="Eclipse Wear Essential Black"
                            />

                            <div className="card-content">

                                <h2 className="infor">
                                    Eclipse Wear Essential Black
                                </h2>

                                <p className="desc">
                                    Corte clássico, tecido macio e
                                    caimento confortável.
                                </p>

                                <p className="price">
                                    R$ 129,90
                                </p>

                            </div>

                        </div>

                    </a>


                    <a href="/produto/essential-moss">

                        <div className="CONJ">

                            <img
                                src="/Assets/Images/Camisa3.png"
                                alt="Essential Moss Streetwear Club"
                            />

                            <div className="card-content">

                                <h2 className="infor">
                                    Essential Moss Streetwear Club
                                </h2>

                                <p className="desc">
                                    Toque macio e corte moderno,
                                    perfeita para looks casuais.
                                </p>

                                <p className="price">
                                    R$ 149,90
                                </p>

                            </div>

                        </div>

                    </a>


                    <a href="/produto/midnight-drift">

                        <div className="CONJ">

                            <img
                                src="/Assets/Images/Camisa4.png"
                                alt="Midnight Drift Urban Wear Club"
                            />

                            <div className="card-content">

                                <h2 className="infor">
                                    Midnight Drift Urban Wear Club
                                </h2>

                                <p className="desc">
                                    Design minimalista com acabamento
                                    premium para uso diário.
                                </p>

                                <p className="price">
                                    R$ 159,90
                                </p>

                            </div>

                        </div>

                    </a>


                    <a href="/produto/urban-phantom">

                        <div className="CONJ">

                            <img
                                src="/Assets/Images/Calca.png"
                                alt="Urban Phantom Cargo Pants"
                            />

                            <div className="card-content">

                                <h2 className="infor">
                                    Urban Phantom Cargo Pants
                                </h2>

                                <p className="desc">
                                    Bolsos utilitários e corte confortável
                                    para o dia a dia.
                                </p>

                                <p className="price">
                                    R$ 219,90
                                </p>

                            </div>

                        </div>

                    </a>


                    <a href="/produto/adidas-shadow">

                        <div className="CONJ">

                            <img
                                src="/Assets/Images/Calca2.png"
                                alt="Adidas Shadow Motion Pants"
                            />

                            <div className="card-content">

                                <h2 className="infor">
                                    Adidas Shadow Motion Pants
                                </h2>

                                <p className="desc">
                                    Tecido leve com elasticidade para
                                    liberdade de movimento.
                                </p>

                                <p className="price">
                                    R$ 189,90
                                </p>

                            </div>

                        </div>

                    </a>


                    <a href="/produto/concrete-flow">

                        <div className="CONJ">

                            <img
                                src="/Assets/Images/Calca3.png"
                                alt="Concrete Flow Wide Pants"
                            />

                            <div className="card-content">

                                <h2 className="infor">
                                    Concrete Flow Wide Pants
                                </h2>

                                <p className="desc">
                                    Modelagem ampla para conforto e
                                    estilo contemporâneo.
                                </p>

                                <p className="price">
                                    R$ 167,67
                                </p>

                            </div>

                        </div>

                    </a>

                </section>

                <Rodape />
            </main>
        </div>
    );
}