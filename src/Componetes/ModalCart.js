import React, {useState} from 'react';
import style from './ModalCat.module.css'
import teste from '../Image/teste.jpg'

const ModalCart = ({isOpen,setOpen}) => {



   if (isOpen) {
      return (
          <div className={style.background}>
             <div className={style.container}>

                <div className={style.modal}>
                   <div className={`text-end`}>
                      <button className={`btn-close`} onClick={()=> setOpen(!isOpen)}></button>
                   </div>
                   <div className={style.header}>
                      <h5>Roni</h5>
                   </div>

                   <div className={style.product}>
                      <div>
                         <img className={style.img} src={teste} alt=""/>
                      </div>

                      <div>
                         <h4>Roni Ribeiro Silva</h4>
                         <p>describe </p>
                         <p>$: <span>99.99</span></p>
                      </div>
                   </div>



                   <div className={style.footer}>
                      <div className={style.subTotal}>
                         <p>Sub Total</p>
                         <p>99.99</p>
                      </div>
                      <div>
                         <button>Finalizar compra</button>
                      </div>
                   </div>

                </div>
             </div>

          </div>
      );
   }

}
export default ModalCart;