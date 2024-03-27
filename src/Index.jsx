import React from 'react'
import Post from './Post';

const tituloZeroUm = 'Titulo zero um'


function Index (){
    return (
        <>
            
            <Post likes={20} post={{
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

export default Index; 