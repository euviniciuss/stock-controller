import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import firebase from '../../config/firebase';
import { FiCheck, FiCheckCircle, FiXCircle, FiX, FiAlertCircle } from 'react-icons/fi';

export default function RegisterProduct() {

    const [name, setName] = useState();
    const [sku, setSku] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState(0);
    const [provider, setProvider] = useState();
    const [msgType, setMsgType] = useState();

    const history = useHistory();
    const db = firebase.firestore();
    const url  = useParams();
    const paramsUrl = [];
    const data = [];

    function handleSave() {
        // eslint-disable-next-line
        if (name, sku, description, provider === undefined) {
            setMsgType('erro');
        }
        else if (price === 0) {
            setMsgType('erro');
        }
        else {
            db.collection('products').add({
                name: name,
                sku: sku,
                description: description,
                price: price,
                provider: provider
            }).then(() => {
                setMsgType('sucess');
                setTimeout(() => history.push('/query'), 3000);
            }).catch(erro => {
                setMsgType('erro');
            })
        }
    };

    
    useEffect(() => {
        paramsUrl.push(url.sku);
        
        if(paramsUrl[0] !== undefined){
            db.collection('products').where('sku', '==' , paramsUrl[0])
                .get()
                .then( async(result) => {
                    await result.docs.forEach( doc => {
                        data.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    
                    if(data[0].sku === paramsUrl[0]){
                        setName(data[0].name);
                        setSku(data[0].sku);
                        setDescription(data[0].description);
                        setPrice(data[0].price);
                        setProvider(data[0].provider);
                    }

                } )
        };
        
        
        // eslint-disable-next-line
    }, []);
    

    function handleCancel() {
        setMsgType('cancel')
        setTimeout(() => history.push('/'), 3000);
    };

    function closeMsg() {
        setMsgType();
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4>Cadastro de Produtos</h4>
            </div>

            <div className="card-body">
                {msgType === 'sucess' &&
                    <div className="alert alert-dismissible alert-success">
                        <button onClick={closeMsg} type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong><FiCheckCircle size="16" /> Wow!</strong> Cadastro do produto realizado com sucesso!
                    </div>
                }
                {msgType === 'erro' &&
                    <div class="alert alert-dismissible alert-danger">
                        <button onClick={closeMsg} type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong><FiXCircle size="16" /> Ops!</strong> Verifique se todos os campos estão preenchidos corretamente!
                    </div>
                }
                {msgType === 'cancel' &&
                    <div class="alert alert-dismissible alert-warning">
                        <button onClick={closeMsg} type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong><FiAlertCircle size="16" /> Vish!</strong> O cadastro desse produto foi cancelado!
                    </div>
                }

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