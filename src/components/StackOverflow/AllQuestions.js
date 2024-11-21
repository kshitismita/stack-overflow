import React from 'react'
import "./css/AllQuestions.css"

function AllQuestions() {
  return (
    <div className='all-questions'>
        <div className='all-questions-container'>
            <div className='all-questions-left'>
                <div className='all-options'>
                    <div className='all-option'>
                        <p>0</p>
                        <span>votes</span>
                    </div>
                    <div className='all-option'>
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className='all-option'>
                        <small>0 Views</small>
                    </div>
                </div>
            </div>
            <div className='question-answer'>
                <h4>Markers on Google maps in flutter gets a larger touch target on Android compared to iOS</h4>
                <div className=''>
                    <div>When using Google maps in flutter with custom markers. The markers will have a larger touch target in Android, compared to iOS. Usually on iOS the touch target is the marker it self, so if i give the </div>
                </div>
                <div className='tags'>
                    <span className='tag'>
                        React
                    </span>
                    <span className='tag'>
                        React
                    </span>
                    <span className='tag'>
                        React
                    </span>
                </div>
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='author-details'>
                        <p>i</p>
                        <p>user name</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllQuestions
