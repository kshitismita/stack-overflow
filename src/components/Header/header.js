import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import {Avatar} from '@mui/material';

const Header = ({ setSearchQuery }) => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIZmN3jD-5RhNtpuyJKVdMTWgy1ZCEoVevA&s" alt='logo'></img>
        </div>
        <div className='header-middle'>
          <div className='header-search-container'>
            <input type='text' placeholder = 'Search...' onChange={(e) => setSearchQuery(e.target.value)}/>
            <SearchIcon />
          </div>
          <h3>Products</h3>
        </div>
        <div className='header-right'>
          <div className='header-right-container'>
            <Avatar />
            <InboxIcon />
            <InboxIcon />
            <InboxIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header