import React, { useState } from 'react';

const LearningPath = () => {
  const [topics, setTopics] = useState([
    { name: 'HTML', learned: true, level: 'Beginner' },
    { name: 'CSS', learned: false, level: 'Intermediate' },
    { name: 'JavaScript', learned: false, level: 'Intermediate' },
    { name: 'React', learned: false, level: 'Advanced' },
    { name: 'Bash Commands', learned: true, level: 'Beginner' },
    { name: 'Linux Commands', learned: true, level: 'Intermediate' },
  ]);

  const handleLearnedToggle = (index) => {
    setTopics((prevTopics) => {
      const updatedTopics = [...prevTopics];
      updatedTopics[index].learned = !updatedTopics[index].learned;
      return updatedTopics;
    });
  };

  return (
    <div className="learning-path">
      <h2>What Did I Learn?</h2>
      <table className="topics-table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Status</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index}>
              <td>
                <div className="topic-name">{topic.name}</div>
              </td>
              <td>
                <div
                  className={`status ${topic.learned ? 'learned' : 'not-learned'}`}
                  onClick={() => handleLearnedToggle(index)}
                >
                  {topic.learned ? 'Learned' : 'Not Learned'}
                </div>
              </td>
              <td className={`level ${topic.level.toLowerCase()}`}>
                {topic.level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .learning-path {
          text-align: center;
          margin-top: 20px;
        }
        .topics-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th,
        td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .topic-name {
          font-weight: bold;
          font-size: 16px;
        }
        .status {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
        }
        .learned {
          background-color: #4cd137;
          color: white;
        }
        .not-learned {
          background-color: #ff5555;
          color: white;
        }
        .level {
          text-transform: capitalize;
          font-weight: bold;
        }
        .level.beginner {
          color: #ff5555;
        }
        .level.intermediate {
          color: #ffd633;
        }
        .level.advanced {
          color: #4cd137;
        }
      `}</style>
    </div>
  );
};

export default LearningPath;
