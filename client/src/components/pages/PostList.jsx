import { useState } from 'react'
import React from 'react'
import CommentCreate from '../CommentCreate'
import CommentList from '../CommentList'

const PostList = ({id, title}) => {
  const [noOfComments, setNoOfComments] = useState("")

  const setCommentNumber = (res) => {
    setNoOfComments(res)
  }
  return (
    <>
      <div className='post'>
      <h2>{title}</h2>
      <i>{noOfComments} comment(s)</i>

      <CommentList id={id} setCommentNumber={setCommentNumber} />

      <CommentCreate id={id} />
      </div>
    </>
  )
}

export default PostList