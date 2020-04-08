import React from 'react';
import { FiCheck, FiAlertTriangle, FiTrash } from 'react-icons/fi';

export default function Register(){
    return(
        <div className="card">
            <div className="card-header">
                <h4>Cadastro de Produtos</h4>
            </div>

            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">
                       <div className="form-group">
                           <label><strong>Nome: </strong></label>
                           <input type="text" className="form-control"/>
                       </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                           <label><strong>SKU: </strong></label>
                           <input type="text" className="form-control"/>
                       </div>
                    </div>
                </div>

                <hr class="my-2" />

                <div className="row">
                    <div className="col-md-12">
                        <label><strong>Descrição: </strong></label>
                        <textarea className="form-control" /> 
                    </div>
                </div>

                <hr class="my-2" />

                <div className="row">
                    <div className="col-md-6">
                       <div className="form-group">
                           <label><strong>Preço: </strong></label>
                           <input type="text" className="form-control"/>
                       </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                           <label><strong>Fornecedor: </strong></label>
                           <input type="text" className="form-control"/>
                       </div>
                    </div>
                </div>

                <hr class="my-2" />

                <div className="row">
                    <div className="col-md-1">
                        <button className="d-flex align-items-center btn btn-success" title="Salvar">
                            <FiCheck />&nbsp;Salvar
                        </button>
                    </div>
                    <div className="col-md-1">
                        <button className="d-flex align-items-center btn btn-warning" title="Limpar">
                            <FiAlertTriangle />&nbsp;Limpar
                        </button>
                    </div>
                    <div className="col-md-1">
                        <button className="d-flex align-items-center btn btn-danger" title="Deletar">
                            <FiTrash />&nbsp;Deletar
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};