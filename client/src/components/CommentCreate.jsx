import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const CommentCreate = ({id}) => {
    const [comment, setComment] = useState("")
  const [commentError, setCommentError] = useState("")

  const submitComment = async (e) => {
    e.preventDefault()
    setCommentError("")
    if(!comment) {
        setCommentError("Enter a comment")
      return
    }
    try {
      await axios.post(`http://localhost:4001/posts/${id}/comments`,  {content: comment})
    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  }
  return (
   <>
    <form onSubmit={submitComment}>
        <div>
          <label htmlFor="">Comment</label> <br />
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} /> <br /> 
          <span>{commentError}</span><br /> <br />

        <button type="submit">submit</button>
        </div>
    </form>
   </>
  )
}

export default CommentCreate