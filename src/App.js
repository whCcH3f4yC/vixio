import React, { useState } from 'react';
import Categorias from "./Componetes/Categorias";
import Products from "./Componetes/Products";
import Header from './Componetes/Header';
import Footer from './Componetes/Footer';

const App = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)

    return (
        <div>
            <Header />
            <Categorias onCategoriaSelecionada={setCategoriaSelecionada} />
            <Products categoriaSelecionada={categoriaSelecionada} />
            <Footer />
        </div>
    );
};

export default App;