import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from '../Pages.jsx/Home'
import Login from '../Pages.jsx/Login'
import MoreDetails from '../Pages.jsx/MoreDetails'
import MoviePage from '../Pages.jsx/MoviePage'
import NotFound from '../Pages.jsx/NotFound'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/moviepage' element={<MoviePage/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/moviepage/:moviedetailspage' element={<MoreDetails/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
    </Routes>
  )
}
