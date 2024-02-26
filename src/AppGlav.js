import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from "./components/Main/Main"
import Chat from "./components/Chat/Chat"


const AppGlav = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/chat' element={<Chat/>}/>
        </Routes>
    </div>
  )
}

export default AppGlav