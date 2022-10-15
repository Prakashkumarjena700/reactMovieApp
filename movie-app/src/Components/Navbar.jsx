import React from 'react'
import {Link} from 'react-router-dom'

let links=[
    {path:'/' , title:'Home'},
    {path:'/moviepage' , title:'Movie Page'},
    {path:'/login' , title:'Login'}
]
export default function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}} >
        {
            links.map((ele)=> <Link key={ele.path} to={ele.path} >{ele.title}</Link>)
        }
    </div>
  )
}
