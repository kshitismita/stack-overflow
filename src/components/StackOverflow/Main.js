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
            </div>
            <div className='main-desc'>
                <div className='main-filter'>
                    <div className='main-tabs'>
                        <div className='main-tab-active'>
                            <p>Interesting</p>
                        </div>
                        <div className='main-tab'>
                            <p>Bountied</p>
                        </div>
                        <div className='main-tab'>
                            <p>Hot</p>
                        </div>
                        <div className='main-tab'>
                            <p>Week</p>
                        </div>
                        <div className='main-tab'>
                            <p>Month</p>
                        </div>
                    </div>
                    </div>
                    <div className='ask-question'>ASK QUESTION</div>
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