import React, { useState } from 'react';

const TechnicalJourney = () => {
  const [journalEntries, setJournalEntries] = useState([
    {
      date: '2023-06-19',
      content: `
        <p>I started learning cloud computing by referencing the learningtocloud.guide site.</p>
        <p>I remembered Networking from the 3 parts of the first stage, Networking, Bash scripts, Bash commands</p>
        <p>In a short time thanks to my networking internship in <a href="https://www.linkedin.com/company/mayaict/" target="_blank" rel="noopener noreferrer">mayaICT</a>.</p>
        <p>I looked at the first 9 parts of Linux Basics for Hackers by Occupyweb.</p>
        <p>It was easy for me because I used Linux during my university education and in my daily life.</p>
        <p>I learned the basic commands of Bash, but the scripting issue was a bit difficult for me.</p>
        <p>I still can't say that I fully understand it.</p>
      `,
    },
    { date: '2023-06-20', content: 'I bought ofsener.com and ower.com.tr domains and host them using Netlify.' },
    // Diğer günlük girişler...
  ]);

  const [activeEntry, setActiveEntry] = useState(null);

  const handleEntryClick = (index) => {
    setActiveEntry(index);
  };

  return (
    <div>
      <h1>Technical Journey</h1>
      <div className="entry-list">
        {journalEntries.map((entry, index) => (
          <div
            key={entry.date}
            className={`entry-item ${index === activeEntry ? 'active' : ''}`}
            onClick={() => handleEntryClick(index)}
          >
            {new Date(entry.date).toLocaleDateString()}
          </div>
        ))}
      </div>
      {activeEntry !== null && (
        <div className="journal-entry">
          <div className="entry-date">
            {new Date(journalEntries[activeEntry].date).toLocaleDateString()}
          </div>
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: journalEntries[activeEntry].content }}
          ></div>
        </div>
      )}
      <style jsx>{`
        .entry-list {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .entry-item {
          padding: 10px;
          background-color: #f2f2f2;
          border-radius: 4px;
          cursor: pointer;
        }
        .entry-item.active {
          background-color: #4caf50;
          color: white;
        }
        .journal-entry {
          margin-top: 20px;
        }
        .entry-date {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .entry-content {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default TechnicalJourney;
