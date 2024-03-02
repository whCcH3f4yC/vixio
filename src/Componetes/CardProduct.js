import React from 'react';
import style from './CardProduct.module.css';

const CardProduct = ({produtosFiltrados}) => {


    return (
        <section className={`container-fluid `}>
            <div className={`row gap-2  p-5`}>

                {produtosFiltrados.map((produto) => (
                    <div key={produto.id} className="card" style={{width: "30rem"}}>
                        <div className={`d-flex justify-content-center`}>
                            <img className={`card-img-top ${style.img}`} src={produto.image} alt={produto.title}/>
                        </div>
                        <div className="card-body">
                        <h6 className={`card-text ${style.title}`}>{produto.title}</h6>
                                <p className={`fs-5 fw-bold`}> $: {produto.price}</p>
                            </div>
                    </div>
                    ))}
            </div>
        </section>
);
};

export default CardProduct;
