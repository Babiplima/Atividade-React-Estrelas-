import './App.css'
import React from 'react'
import Primeiro from './componentes/Primeiro'
import ComParametro from './componentes/ComParametro'
import Card from './componentes/Layout/Card'

export default props => (
    <div className="App">
     <Card titulo="Componente com Filhos">
        <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
    </ComFilhos>
    </Card>

    <Card titulo="Componente com Parâmetro">
    <ComParametro titulo="Esse é o titulo"
    subtitulo="Esse é o subtítulo" />
    <Card titulo="Componente com Parâmetro">
    <ComParametro titulo="Esse é o titulo"
    subtitulo="Esse é o subtítulo" />
    </Card>
    <Card titulo="Primeiro Componente">
    <Primeiro/>
    </Card>
    {/*
{/*

<ComParametro titulo="Opa" subtitulo="Epa"/>*/}

</div>
);