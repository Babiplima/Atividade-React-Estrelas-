import './App.css';
import React from 'react';

import Primeiro from './componentes/Primeiro';
import ComParametro from './componentes/ComParametro'
import ComFilhos from './componentes/ComFilhos'
import Card from './componentes/Layout/Card';
import Repeticao from "./componentes/Repeticao";
import Condicional from "./componentes/Condicional";
import CondicionalComIf from "./componentes/CondicionalComIf";



export default (props) => (
    
    <div className="App">
    <Card titulo="#06 - Condicional v2">
    <CondicionalComIf numero={11}></CondicionalComIf>       
    </Card>
     <Card titulo="#05 - Condicional v1">
     <Condicional numero={10}></Condicional>       
    </Card>
    <Card titulo="#04 - Repetição">
     <Repeticao></Repeticao>       
    </Card>
    <Card titulo="#03 - Componente Com Filhos">
     <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
        </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente Com Parametro">
     <ComParametro titulo="Esse é o titulo"
    subtitulo="Esse é o subtítulo" />
    </Card>
     <Card titulo="#01 - Primeiro Componente">
         <Primeiro/>
         </Card>
  
</div>
);