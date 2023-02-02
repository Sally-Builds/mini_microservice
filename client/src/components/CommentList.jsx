import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

const CommentList = ({id, setCommentNumber}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const res = await axios.get(`http://localhost:4001/posts/${id}/comments`)

            setComments(res.data)
            setCommentNumber(res.data.length || 0)
        }
        getComments()
    }, [id, setCommentNumber])
  return (
        <ul>
            {
                comments.map((el) => (
                    <li key={el.id}> {el.content} </li>
                ))
            }
      </ul>
  )
}

export default CommentList