import React, { useState } from 'react';

const TechnicalJournal = () => {
  const [journalEntries, setJournalEntries] = useState([
    { date: '2023-06-19', content: `
    <p>I started learning cloud computing by referencing the learningtocloud.guide site.</p>
    <p>I remembered Networking from the 3 parts of the first stage, Networking, Bask scripts, Bash commands</p>
    <p>In a short time thanks to my networking internship in  <a href="https://www.linkedin.com/company/mayaict/" target="_blank" rel="noopener noreferrer">mayaICT</a>.</p>
    <p>I looked at the first 9 parts of Linux Basics for Hackers by Occupyweb.</p>
    <p>It was easy for me because I used linux during my university education and in my daily life.
    <p>I learned the basic commands of Bash, but the scripting issue was a bit difficult for me</p>
    <p>I still can't say that I fully understand it.</p>
    `,
    },
    { date: '2023-06-20', content: 'I bought ofsener.com and ower.com.tr domains and host them using Netlify.' },
    // Diğer günlük girişler...
  ]);

  const [activeDate, setActiveDate] = useState(new Date().toISOString().slice(0, 10));

  const handlePrevDay = () => {
    const prevDate = new Date(activeDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setActiveDate(prevDate.toISOString().slice(0, 10));
  };

  const handleNextDay = () => {
    const nextDate = new Date(activeDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setActiveDate(nextDate.toISOString().slice(0, 10));
  };

  const handleContentChange = (date, content) => {
    setJournalEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      const index = updatedEntries.findIndex((entry) => entry.date === date);
      if (index !== -1) {
        updatedEntries[index].content = content;
      } else {
        updatedEntries.push({ date, content });
      }
      return updatedEntries;
    });
  };

  return (
    <div>
      <h1>Technical Journal</h1>
      <div className="calendar">
        <button className="calendar-nav" onClick={handlePrevDay}>
          &lt;
        </button>
        <div className="calendar-days">
          {journalEntries.map((entry) => (
            <div
              key={entry.date}
              className={`calendar-day ${entry.date === activeDate ? 'active' : ''} ${
                entry.content ? 'filled' : 'empty'
              }`}
              onClick={() => setActiveDate(entry.date)}
            >
              <span>{new Date(entry.date).getDate()}</span>
            </div>
          ))}
        </div>
        <button className="calendar-nav" onClick={handleNextDay}>
          &gt;
        </button>
      </div>
      <div className="journal-entry">
        <h2>{activeDate}</h2>
        <textarea
          value={journalEntries.find((entry) => entry.date === activeDate)?.content || ''}
          onChange={(e) => handleContentChange(activeDate, e.target.value)}
        ></textarea>
      </div>
      <style jsx>{`
        .calendar {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .calendar-nav {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .calendar-days {
          display: flex;
          gap: 5px;
        }
        .calendar-day {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #f2f2f2;
          border-radius: 4px;
          cursor: pointer;
        }
        .calendar-day.active {
          background-color: #4caf50;
          color: white;
        }
        .calendar-day.filled {
          background-color: #4caf50;
          color: white;
        }
        .calendar-day.empty {
          background-color: #ccc;
          color: white;
        }
        .journal-entry {
          margin-bottom: 20px;
        }
        textarea {
          width: 100%;
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default TechnicalJournal;
