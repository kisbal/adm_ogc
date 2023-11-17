import React from 'react'
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom'
import Footer from './component/footer'
import ViewDetail from './pages/viewdetail'
import ViewTransaksi from './pages/viewTransaksi'
import Homepage from './pages/homepage'
import LoginPage from './pages/login'


function Routing() {
  return (
    <>
    <Router>
        <Routes>

            <Route path='/' element={<Homepage/>}></Route>
            {/* <Route path='/' element={<LoginPage/>}></Route> */}
            <Route path='/view-unit' element={<ViewDetail/>}></Route>
            <Route path='/view-transaksi' element={<ViewTransaksi/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default Routing