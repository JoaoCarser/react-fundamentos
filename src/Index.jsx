import React from "react";
import Post from "./Post";

const tituloZeroUm = "Titulo zero um";

function Index() {
  return (
    <>
      <Post
        likes={20}
        post={{
          title: "Título 1",
          subtitle: "Subtitle 1",
        }}
      />
      <Post
        likes={10}
        post={{title: "Titulo 2", subtitle: "Subtitulo 2"}}
      />
      <Post
        likes={30}
        post={{
          title: "Título 3",
          subtitle: "Subtitle 3",
        }}
      />
    </>
  );
}

export default Index;
