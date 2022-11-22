import { Route, Routes } from "react-router-dom"
import Comments from "./comments.jsx"
import Posts from "./posts.jsx"



export default function Home () {

  return(
    <div>
      <Comments/>
      {/* <Posts/> */}
    </div>
  )
}