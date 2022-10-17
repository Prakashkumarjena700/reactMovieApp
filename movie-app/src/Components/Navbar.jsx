import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import '../App.css'


let links=[
    {path:'/' , title:'Home'},
    {path:'/moviepage' , title:'Movie Page'},
]
export default function Navbar() {
 
  return (
    <div className='navBar' >
        {
            links.map((ele)=> <Link key={ele.path} to={ele.path} >{ele.title}</Link>)
        }
    </div>
  )
}
