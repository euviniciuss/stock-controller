import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';

export default function RegisterProduct(){

    const [name, setName] = useState('');
    const [sku, setSku] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [provider, setProvider] = useState('');

    const history = useHistory();

    function handleSave(){
        alert('Seu item foi salvo com sucesso!');
        history.push('/query');
    };

    function handleCancel(){
        alert('cancelado');
        history.push('/');
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4>Cadastro de Produtos</h4>
            </div>

            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">
                       <div className="form-group">
                           <label><strong>Nome: </strong></label>
                           <input
                           value={name}
                           onChange={(e) => setName(e.target.value)} 
                           type="text" 
                           className="form-control"
                           />
                       </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                           <label><strong>SKU: </strong></label>
                           <input
                           value={sku}
                           onChange={(e) => setSku(e.target.value)} 
                           type="text" 
                           className="form-control"
                           />
                       </div>
                    </div>
                </div>

                <hr className="my-2" />

                <div className="row">
                    <div className="col-md-12">
                        <label><strong>Descrição: </strong></label>
                        <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control" 
                        /> 
                    </div>
                </div>

                <hr className="my-2" />

                <div className="row">
                    <div className="col-md-6">
                       <div className="form-group">
                           <label><strong>Preço: </strong></label>
                           <input 
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                           type="text" 
                           className="form-control"
                           />
                       </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                           <label><strong>Fornecedor: </strong></label>
                           <input 
                           value={provider}
                           onChange={(e) => setProvider(e.target.value)}
                           type="text" 
                           className="form-control"
                           />
                       </div>
                    </div>
                </div>

                <hr className="my-2" />

                <div className="row">
                    <div className="col-md-1 my-2">
                        <button onClick={handleSave} className="d-flex align-items-center btn btn-success" title="Salvar">
                            <FiCheck />&nbsp;Salvar
                        </button>
                    </div>
                    <div className="col-md-1 my-2">
                        <button onClick={handleCancel} className="d-flex align-items-center btn btn-danger" title="Deletar">
                            <FiX />&nbsp;Cancelar
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};