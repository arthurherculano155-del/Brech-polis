import React from 'react';
import Home from './Pages/Home/Home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Conjuntos from './Pages/Conjuntos/Conjuntos.jsx';
import Contato from './Pages/Contato/contato.jsx';
import Retirada from './Pages/Retirada/Retirada.jsx';
import VerMais from './Pages/VerMais/VerMais.jsx';

export default function Rotas() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/conjuntos' element={<Conjuntos />} />
                    <Route path='/retirada' element={<Retirada />} />
                    <Route path='/contato' element={<Contato />} />
                    <Route path='/vermais' element={<VerMais />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}