import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo ao Stock Controller</h1>
            <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas</p>
            <hr className="my-4" />
            <p>Use ele para cadastrar,adcionar e excluir produtos.</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/registerProduct" role="button">Cadastrar Produtos</Link>
            </p>
        </div>
    );
};