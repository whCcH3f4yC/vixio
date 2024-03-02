import React, {useState} from 'react';
import Categorias from "./Componetes/Categorias";

import Products from "./Componetes/Products";

const App = () => {
const [categoriaSelecionada,setCategoriaSelecionada] = useState(null)
    return (
        <div>
          <Categorias onCategoriaSelecionada={setCategoriaSelecionada} />
            <Products categoriaSelecionada={categoriaSelecionada} />
        </div>
    );
};

export default App;