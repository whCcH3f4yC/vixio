import React from 'react';
import style from './Categorias.module.css';

const Categorias = ({ onCategoriaSelecionada }) => {
    return (
        <nav id={style.containerNav} className={'container-fluid'}>
            <div className={`row`}>
                <ul className={`${style.NavList}`}>
                    <li><a href="#" onClick={() => onCategoriaSelecionada(null)}>Home</a></li>
                    <li><a href="#" onClick={() => onCategoriaSelecionada('electronics')}>Electronics</a></li>
                    <li><a href="#" onClick={() => onCategoriaSelecionada('jewelery')}>Jewelery</a></li>
                    <li><a href="#" onClick={() => onCategoriaSelecionada("men's clothing")}>Men's Clothing</a></li>
                    <li><a href="#" onClick={() => onCategoriaSelecionada("women's clothing")}>Women's Clothing</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Categorias;
