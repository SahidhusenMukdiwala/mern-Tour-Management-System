import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SearchResult from '../Pages/SearchResult'
import Tour from '../Pages/Tour'
import TourDetails from '../Pages/TourDetails'
import ThankYou from '../Pages/ThankYou'
import { ReqAuth } from '../ReqAuth/ReqAuth'
function Router() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<ReqAuth><Home/></ReqAuth>} />
        <Route path='/tours' element={<ReqAuth><Tour/></ReqAuth>} />
        <Route path='/tours/:id' element={<TourDetails/>} />
        <Route path='/tours/search' element={<SearchResult/>} />
        <Route path='/thank-you' element={<ThankYou/>}/>
    </Routes>
  )
}

export default Router