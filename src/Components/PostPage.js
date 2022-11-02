import React from 'react'
import { useSelector } from 'react-redux';
import { getPostById } from './Redux/Posts/PostSlice';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';


const PostPage = () => {
    const post = useSelector((state)=>getPostById(state, postId))

    if(!post){
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }
  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className='postCredit'>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

export default PostPage
