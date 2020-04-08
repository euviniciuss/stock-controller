import React from 'react';

export default function Home(){
    return(
        <div class="jumbotron">
            <h1 class="display-3">Bem vindo ao Stock Controller</h1>
            <p class="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas</p>
            <hr class="my-4" />
            <p>Use ele para cadastrar,adcionar e excluir produtos.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="/register" role="button">Cadastrar</a>
            </p>
        </div>
    );
};