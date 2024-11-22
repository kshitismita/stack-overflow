import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaRegComment, FaEye } from 'react-icons/fa';
import "./css/questionlist.css"

const QuestionsList = ({ searchQuery }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const apiURL = 'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow';
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setQuestions(data.items || []))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter questions based on search query
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='container'>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <div key={question.question_id} className="question-card">
              <h3>
                <a href={question.link} target="_blank" rel="noopener noreferrer">
                  {question.title}
                </a>
              </h3>
              <div className='tags'>
                {question.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="footer">
              <div className="question-stats">
                <span className="upvotes">
                  <FaArrowUp /> {question.score}
                </span>
                <span className="answers">
                  <FaRegComment /> {question.answer_count}
                </span>
                <span className="views">
                  <FaEye /> {question.view_count}
                </span>
              </div>
              <div className="author">Asked by : <span> {question.owner.display_name}</span></div>
              </div>
            </div>
          ))
        ) : (
          <p>No questions found</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsList;
