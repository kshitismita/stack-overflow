import React from 'react'
import QuestionsList from './QuestionsList'
import AllQuestions from './AllQuestions'
import './css/Main.css'

const Main = ({ searchQuery }) => {
  return (
    <div className='main'>
        <div className='main-container'>
            <div className='main-top'>
                <h2>Top Questions</h2>
                <div className='ask-question'>Ask Questions</div>
            </div>
            <div className='main-desc'>
                <p>All Questions Stat</p>
                <div className='main-filter'>
                    <div className='main-tabs'>
                        <div className='main-tab'>
                            <p>Option 1</p>
                        </div>
                        <div className='main-tab'>
                            <p>Option 2</p>
                        </div>
                        <div className='main-tab'>
                            <p>Option 3</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='questions'>
                        <div className='question'>
                        <QuestionsList searchQuery={searchQuery} />
                            {/* <AllQuestions /> */}
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Main