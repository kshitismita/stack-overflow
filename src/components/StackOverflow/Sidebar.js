import React from 'react'
import './css/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-container'>
            <div className='sidebar-options'>
                <div className='sidebar-option-active'>
                    <p>HOME</p>
                </div>
                <div className='sidebar-option'>
                    <p>PUBLIC</p>
                    <div className='link'>
                    <p>Questions</p>
                    <p>Tags</p>
                    <p>Users</p>
                </div>
                </div>
                <div className='sidebar-option'>
                    <p>COLLECTIVES</p>
                    <div className='link'>
                    <p>Explore Jobs</p>
                </div>
                </div>
                <div className='sidebar-option'>
                    <p>FIND Jobs</p>
                    <div className='link'>
                    <p>Jobs</p>
                    <p>Companies</p>
                </div>
                </div>
                <div className='sidebar-option'>
                    <p>TEAMS</p>
                    <div className='link'>
                    <p>+ Create a team</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar