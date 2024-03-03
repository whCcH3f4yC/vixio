import React from 'react';
import style from './Categorias.module.css';

const Categorias = ({ onCategoriaSelecionada }) => {
    return (
        <nav id={style.containerNav} className={'container-fluid'}>
            <div className={`row`}>
                <ul className={`${style.NavList}`}>
                    <li><a href="home" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada(null); }}>Home</a></li>
                    <li><a href="electronics" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada('electronics'); }}>Electronics</a> </li>
                    <li><a href="jewelery" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada('jewelery'); }}>Jewelery</a> </li>
                    <li><a href="men's clothin" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada("men's clothing"); }}>Men's Clothin</a> </li>
                    <li><a href="women's clothing" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada("women's clothing"); }}>Women's Clothing</a> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Categorias;
