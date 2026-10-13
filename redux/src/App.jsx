import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './features/posts/postsSlice';

function App() {
  // שליפת הפוסטים מתוך הסטור של רידקס
  const posts = useSelector(selectAllPosts);

  return (
    <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'Arial' }}>
      <h1>רשימת פוסטים מ-Redux</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;