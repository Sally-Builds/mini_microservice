import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
import PostCreate from './components/pages/PostCreate';
import PostList from './components/pages/PostList';

function App() {
  const [posts, setPosts] = useState([{id: "1", title: "hello world"}, {id: "2", title: "My Post"}])
  useEffect(() => {
    async function getData () {
      try {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [setPosts])
  return (
    <div className="App">
      <PostCreate />
      <hr />
      <div className='postlist'>
      {
        posts.map((el) => (
            <PostList key={el.id} title={el.title} id={el.id} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
