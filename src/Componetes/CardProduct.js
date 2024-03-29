import React from 'react';
import style from './CardProduct.module.css';
import Modal from './Modal';

const CardProduct = ({ produtosFiltrados }) => {
    return (
        <div>
            <section className={`container-fluid`}>
                <div className={`row gap-2 mt-3 mb-5  justify-content-center `}>

                    {produtosFiltrados.map((produto) => (
                        <div id='produto' key={produto.id} className="card" style={{ width: "23rem" }}>
                            <div className={`d-flex justify-content-center`}>
                                <img
                                    data-bs-toggle="modal"
                                    data-bs-target={`#modalProduct${produto.id}`} // Usando um ID único para cada modal
                                    className={`card-img-top ${style.img}`}
                                    src={produto.image}
                                    alt={produto.title}
                                />
                            </div>
                            <div className="card-body">
                                <h6 className={`card-text ${style.title}`}>{produto.title}</h6>
                                <p className={`fs-5 fw-bold`}> $: {produto.price}</p>
                            </div>


                            <Modal produto={produto} />
                        </div>

                    ))}

                </div>
            </section>
        </div>
    );
};

export default CardProduct;
