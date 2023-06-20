import React, { useState } from 'react';

const LearningPath = () => {
  const [topics, setTopics] = useState([
    { name: 'HTML', learned: true },
    { name: 'CSS', learned: false },
    { name: 'JavaScript', learned: false },
    { name: 'React', learned: false },
    {name: 'Bash Commands', learned: true },
    {name: 'Linux Commands', learned: true },
  ]);

  const handleLearnedToggle = (index) => {
    setTopics((prevTopics) => {
      const updatedTopics = [...prevTopics];
      updatedTopics[index].learned = !updatedTopics[index].learned;
      return updatedTopics;
    });
  };

  return (
    <div>
      <h1>Learning Path</h1>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index}>
              <td>{topic.name}</td>
              <td>
                <button
                  className={topic.learned ? 'learned' : 'not-learned'}
                  onClick={() => handleLearnedToggle(index)}
                >
                  {topic.learned ? 'Learned' : 'Not Learned'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .learned {
          background-color: green;
          color: white;
        }
        .not-learned {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default LearningPath;
