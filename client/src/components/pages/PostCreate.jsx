import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const PostCreate = () => {
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState("")

  const submitPost = async (e) => {
    e.preventDefault()
    setTitleError("")
    if(!title) {
      setTitleError("Enter a title")
      return
    }
    try {
      const res = await axios.post('http://localhost:4000/posts',  {title})
      console.log(res)
    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  }
  return (
    <>
       <div id='header'>
          <h3> Create Post</h3>

          <div>
              <form onSubmit={submitPost}>
                  <div>
                      <label htmlFor="">Title</label> <br />
                      <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} /> <br />
                      <span>{titleError}</span> <br /> <br />

                      <button type="submit">Submit</button>
                  </div>
              </form>
          </div>
       </div>
    </>
  )
}

export default PostCreate