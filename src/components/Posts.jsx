import React from 'react'
import Post from './Post';
import AddPost from './AddPost';
import Note from './Note';

const Posts = ({ posts, onRemove, onCreate, caption}) => {

  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} caption={caption} />
      {posts.map( posta => (
      <Post {...posta} key={posta.id} onRemove={onRemove}/> 
      ))} 
    </section>
  )
}

export default Posts;
