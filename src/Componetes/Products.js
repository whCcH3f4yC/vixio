import React, { useEffect, useState } from 'react';
import CardProduct from "./CardProduct";

const Products = ({ categoriaSelecionada }) => {
    const [data, setData] = useState(null);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setProdutosFiltrados(json); // Inicialmente, mostra todos os produtos
            });
    }, []);

    useEffect(() => {
        if (data) {
            if (categoriaSelecionada) {
                const produtosFiltrados = data.filter(produto => produto.category === categoriaSelecionada);
                setProdutosFiltrados(produtosFiltrados);
            } else {
                // Se nenhuma categoria estiver selecionada, mostra todos os produtos
                setProdutosFiltrados(data);
            }
        }
    }, [data, categoriaSelecionada]);

    return (
        <div>
            <CardProduct produtosFiltrados={produtosFiltrados} />
        </div>
    );
};

export default Products;
