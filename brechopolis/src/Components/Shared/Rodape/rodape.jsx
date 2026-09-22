import './rodape.scss';

export default function Rodape() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="ft">

                    <img
                        src="/Assets/Images/brechopolis-logo.png"
                        alt="Logo Brechópolis"
                    />

                    <p>
                        MODA CONSCIENTE, ACHADOS INCRÍVEIS E ESTILO
                        ÚNICO EM CADA DETALHE
                    </p>

                </div>

                <div className="footer-links">

                    <a
                        href="https://www.google.com/maps/place/B.+Luxo/@-23.5317407,-46.6622659,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59d3efc9f233:0xcd7460a15000a1ec!8m2!3d-23.5317407!4d-46.6622659!16s%2Fg%2F1ptwxd6mg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Nossa loja
                    </a>

                    <a href="/contato">
                        Contato
                    </a>

                    <a href="/retirada">
                        Retirada
                    </a>

                </div>

            </div>

            <p className="footer-copy">
                © 2026 Brechópolis. Todos os direitos reservados.
            </p>

        </footer>
    );
}