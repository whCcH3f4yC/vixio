import React, {useState} from 'react';
import style from './Categorias.module.css';
import bag from '../Image/bag.png'
import ModalCart from "./ModalCart";
const Categorias = ({ onCategoriaSelecionada }) => {

    const [open, setOpen] = useState(false)
    return (
        <div className='d-flex bg-white align-items-center '>
        <nav id={style.containerNav} className={'container-fluid '}>
            <div className={`row p-3`}>
                <ul className={`${style.NavList}`}>

                    <li>
                        <a href="home" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada(null); }}>Home</a>
                    </li>

                    <li>
                        <a href="electronics" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada('electronics'); }}>Electronics</a>
                    </li>

                    <li>
                        <a href="jewelery" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada('jewelery'); }}>Jewelery</a>
                    </li>

                    <li>
                        <a href="men's clothin" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada("men's clothing"); }}>Men's Clothin</a>
                    </li>

                    <li>
                        <a href="women's clothing" onClick={(e) => { e.preventDefault(); onCategoriaSelecionada("women's clothing"); }}>Women's Clothing</a>
                    </li>

                </ul>
            </div>
        </nav>
        <div className={style.containerIgm}>
            <img className={style.img} src={bag} alt="carrinho" onClick={()=> setOpen(!open)} />
        </div>

            <ModalCart isOpen={open} setOpen={setOpen} />
        </div>
    );
};

export default Categorias;
