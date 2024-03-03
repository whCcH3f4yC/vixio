import React from 'react';

const Modal = ({ produto }) => {
    return (
        <div className=''>
            {/* Usando um ID único para cada modal */}
            <div className={`modal modal-xl fade`} id={`modalProduct${produto.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body d-flex align-items-center " >
                            <div>
                                <img className='p-5' style={{width: "400px"}} src={produto.image} alt={produto.title} />
                            </div>
                            <div className='p-5 mt-5' >
                                <h1 className="modal-title" id="exampleModalLabel">{produto.title}</h1>
                                <p className='fs-5'>Description: {produto.description}</p>
                                <p className='fs-4 fw-semibold '>Price: ${produto.price}</p>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
