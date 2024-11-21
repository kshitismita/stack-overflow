import React from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main'
import Blogs from './Blogs'

const index = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Sidebar />
            <Main searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Blogs />
        </div>
    </div>
  )
}

export default index