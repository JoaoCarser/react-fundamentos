import React, { useState } from "react";
import Post from "../post/Post.jsx";
import Header from "../../Header.jsx";
import {Title} from "./styles.jsx";
import { ThemeProvider } from "../../context/ThemeContext.jsx";


function Index() {
  

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Titulo 1",
      subtitle: "Subtitle 1",
      likes: 20,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Titulo 2",
      subtitle: "Subtitle 2",
      likes: 10,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Titulo 3",
      subtitle: "Subtitle 3",
      likes: 50,
      removed: false,
    },
  ]);



  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Titulo: ${prevState.length + 1}`,
        subtitle: `Subtitle: ${prevState.length + 1}`,
        likes: 50,
        read: false,
      },
    ]);

  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map((post) => 
      post.id === postId ? {...post, removed: true} : post
    ));
  }




  return (
    <ThemeProvider>


      <Header title="Carser's Blog" >
        <Title as="h2">
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>



      {posts.map((post) => (
        <Post 
          key={post.id} 
          onRemove={handleRemovePost} 
          post={post} 
          />
      ))}


    </ThemeProvider>
  );
}

export default Index;
