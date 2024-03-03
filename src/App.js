import React, { useState } from 'react';
import Categorias from "./Componetes/Categorias";
import Products from "./Componetes/Products";
import Header from './Componetes/Header';

const App = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)

    return (
        <div>
            <Header />
            <Categorias onCategoriaSelecionada={setCategoriaSelecionada} />
            <Products categoriaSelecionada={categoriaSelecionada} />
        </div>
    );
};

export default App;