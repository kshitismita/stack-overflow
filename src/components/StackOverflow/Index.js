import React from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main'
import Blogs from './Blogs'

function index() {
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Sidebar />
            <Main />
            <Blogs />
        </div>
    </div>
  )
}

export default index