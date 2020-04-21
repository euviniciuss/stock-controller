import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import { FiTrash, FiEdit } from 'react-icons/fi';

export default function Query() {

    const [products, setProducts] = useState([]);
    let listProducts = [];

    useEffect(() => {
        firebase.firestore().collection('products').get().then( async(result) => {
            await result.docs.forEach( doc => {
                listProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setProducts(listProducts);
        })
    });

    return (
        <div className="card">
            <div className="card-header">
                <h4>Consulta de Produtos</h4>
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>
                    {products.map(item => (
                        <tbody key={item.id}>
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.sku}</th>
                                <th>{item.price}</th>
                                <th>{item.provider}</th>
                                <th>
                                    <div className="row">
                                        <button className="d-flex align-items-center mr-2 btn btn-primary" title="Editar">
                                            <FiEdit />&nbsp;Editar
                                        </button>
                                        <button className="d-flex align-items-center btn btn-danger" title="Deletar">
                                            <FiTrash />&nbsp;Deletar
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};