import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header.jsx";

function Index() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Titulo 1", subtitle: "Subtitle 1", likes: 20 },
    { id: Math.random(), title: "Titulo 2", subtitle: "Subtitle 2", likes: 10 },
    { id: Math.random(), title: "Titulo 3", subtitle: "Subtitle 3", likes: 50 },
  ]);

  console.log({posts});

  function handleRefresh() {
    // posts.push({
    //   id: Math.random(),
    //   title: `Titulo ${posts.length + 1}`,
    //   subtitle: `Subtitle ${posts.length + 1}`,
    //   likes: 30,
    // });

    setPosts([...posts, 
        {
            id: Math.random(),
            title: `Titulo: ${posts.length +1}`,
            subtitle: `Subtitle: ${posts.length +1}`,
            likes: 50,
            
        }]);

    console.log(posts);
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
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default Index;
