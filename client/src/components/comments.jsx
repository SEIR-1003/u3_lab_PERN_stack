import { useState, useEffect } from "react"
import axios from 'axios'

export default function Comments () {


  const [comment, setComments] = useState(null)

useEffect(() => {
  const getData = async () =>{
    const response = await axios.get('http://localhost:3001/api/comments/view')
      console.log(response.data[0].content)
      setComments(response.data)
  
  }

  getData()

}, [])


return comment ? (
<div>
  <h1>{comment[1].content}</h1>
</div>
) : null
}