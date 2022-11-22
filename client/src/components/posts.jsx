import { useState, useEffect } from "react"
import axios from 'axios'

export default function Posts () {


  const [post, setPosts] = useState(null)

useEffect(() => {
  const getData = async () =>{
    const response = await axios.get('http://localhost:3001/api/comments/view')
      console.log(response.data[0].title)
      setPosts(response.data)
  
  }

  getData()

}, [])

return post ? (
  <div>
    <h1>{post[0].title}</h1>
  </div>
  ) : null
  }