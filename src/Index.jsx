import React from 'react'
import Post from './Post';

const tituloZeroUm = 'Titulo zero um'


function Teste (){
    return (
        <>
            <h1>Carser's Blog</h1>
            <h2>Posts da semana</h2>

            <hr />

            <Post post={{
                title: "Título 1",
                subtitle: 'Subtitle 1'
            }}/>
            <Post post={{
                title: "Título 2",
                subtitle: 'Subtitle 2'
            }}/>
            <Post post={{
                title: "Título 3",
                subtitle: 'Subtitle 3'
            }}/>

            

            

        </>
    );
}

export default Teste; 