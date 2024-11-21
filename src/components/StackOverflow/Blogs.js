import React from 'react'
import "./css/blogs.css"

function Blogs() {
  return (
    <div class="right-section">
  <div class="section">
    <h3>The Overflow Blog</h3>
    <ul>
      <li>Why Stack Overflow is letting you down (and what to do about it)</li>
      <li>How to build a full-stack application with React</li>
      <li>Learning React with Hooks: The Future of Front-End Development</li>
    </ul>
  </div>

  <div class="section">
    <h3>Featured</h3>
    <ul>
      <li>What is the best practice for API development?</li>
      <li>React vs Vue: A comprehensive comparison</li>
      <li>Top 10 JavaScript frameworks to learn in 2024</li>
    </ul>
  </div>

  <div class="section">
    <h3>Meta</h3>
    <ul>
      <li>Stack Overflow Developer Survey 2024 results</li>
      <li>How to contribute to open-source Stack Overflow</li>
      <li>What are the new features coming to Stack Overflow?</li>
    </ul>
  </div>
</div>
  )
}

export default Blogs