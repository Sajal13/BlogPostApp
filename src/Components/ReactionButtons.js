import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './Redux/Posts/PostSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    hahaha: '😂',
    sad: '😭'
}

function ReactionButtons({post}) {
    const dispatch = useDispatch()
    
    const reactionButtonsLists = Object.entries(reactionEmoji).map(
        ([name, emoji]) =>{
            return (
                <button
                    key={name}
                    type={"button"}
                    className = "reactionButton"
                    onClick={()=>
                    dispatch(reactionAdded({
                        postId: post.id,
                        reaction: name
                    }))}
                >
                  {emoji}{post.reactions[name]}
                </button>
              )
        }
    )
  return(
    <div>{reactionButtonsLists}</div>
  )
}

export default ReactionButtons
