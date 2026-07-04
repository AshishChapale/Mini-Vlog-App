import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      setPosts(data);
    }

    fetchPosts();
  }, []);
  
  return (
    <div>
      <h1>Home Page</h1>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/post/${post.id}`} >{post.title}</Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  )



  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function PostDetails() {
  const  { id } = useParams();

  return (
    <div>
      <h1>Post Details Page</h1>
      <h2>Post ID: {id}</h2>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    {/* navigation here */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/post/1">Post 1</Link> |{" "}
        <Link to="/post/2">Post 2</Link>
      </nav>

      {/* routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;