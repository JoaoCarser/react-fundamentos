import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header.jsx";

function Index() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Titulo 1", subtitle: "Subtitle 1", likes: 20, read: false},
    { id: Math.random(), title: "Titulo 2", subtitle: "Subtitle 2", likes: 10, read: true},
    { id: Math.random(), title: "Titulo 3", subtitle: "Subtitle 3", likes: 50, read: false},
  ]);

  console.log({ posts });

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Titulo: ${prevState.length + 1}`,
        subtitle: `Subtitle: ${prevState.length + 1}`,
        likes: 50,
      },
    ]);

    console.log(posts);
  }


  function handleRemovePost(postId){
    setPosts((prevState) => (
        prevState.filter(post => post.id !== postId)
    ));
  }




  return (
    <>
      <Header title="Carser's Blog">
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </>
  );
}

export default Index;
