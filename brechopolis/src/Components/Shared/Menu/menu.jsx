import './menu.scss';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <header className="menu">
            <img
                src="/Assets/Images/brechopolis-logo.png"
                alt="Logo Brechópolis"
                className="logo"
            />

            <ul className="links">
                <li>
                    <a
                        href="https://www.google.com/maps/place/B.+Luxo/@-23.5317407,-46.6622659,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59d3efc9f233:0xcd7460a15000a1ec!8m2!3d-23.5317407!4d-46.6622659!16s%2Fg%2F1ptwxd6mg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Endereço
                    </a>
                </li>

                <li>
                    <NavLink 
                        to="/"
                        end
                        className={({isActive}) => 
                            isActive ? "Ativo" : ""
                        }>Início</NavLink>
                </li>

                <li>
                    <NavLink    
                        to="/conjuntos"
                        className={({isActive}) => 
                        isActive ? "Ativo" : ""
                        }>Conjuntos</NavLink>
                </li>

                <li>
                    <NavLink    
                        to="/retirada"
                        className={({isActive}) => 
                        isActive ? "Ativo" : ""
                        }>Retirada</NavLink>
                </li>

                <li>
                    <NavLink    
                        to="/contato"
                        className={({isActive}) => 
                        isActive ? "Ativo" : ""
                        }>Contato</NavLink>
                </li>
            </ul>

            <button className="login-button">
                <i className="fa-regular fa-user"></i>
            </button>
        </header>
    )
}