import React from 'react';
import Link from 'next/link';
import LearningPath from '../components/LearningPath';

const LearningPathPage = () => {
  return (
    <div className="learning-path-page">
      <h1>Learning Path</h1>
      <div className="learning-path-container">
        <LearningPath />
      </div>
      <Link href="/">
        <a>Go Back to Home</a>
      </Link>
      <style jsx>{`
        .learning-path-page {
          text-align: center;
        }
        .learning-path-container {
          display: inline-block;
          margin-top: 20px;
        }
        .container{
          background-color: #f2f2f2;
        }
        
      `}</style>
    </div>
  );
};

export default LearningPathPage;
