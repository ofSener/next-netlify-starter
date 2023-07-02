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
    { date: '2023-06-23',
      content:`
      <p>I watched a video about bash scripts today, here's the link: https://www.youtube.com/watch?v=7qd5sqazD7k.</p>
      <p>After watching the video,</p>
      <p>I examined some bash script examples and wrote around 10 scripts myself.</p>
      <p>Here's another video link: https://www.youtube.com/watch?v=q2z-MRoNbgM&t=2334s.</p>
      <p>I tried out different variations of the examples from this video as well.</p> 
      `,
    },
    { date : '2023-06-25',
      content:`
      <p>Continued scripting in bash and wrote about 20-30 more scripts.</p> 
      <p>I wanted to upload them to my GitHub but couldn't figure it out :) </p> 
      <p>After scripting even more, I decided to upload them all together.</p> `,},
    { date : '2023-06-27',
      content:`
      <p>I watched some videos about uploading to GitHub, but still couldn't manage it.</p>
      <p>So, I decided to learn it properly after finishing all the scripts and put it on hold for now.</p>
      `,},
    { date : '2023-06-29',
      content:`
      <p>I did some more scripting in bash.</p>
      <p>I realized that I'm falling behind according to the learning plan on learntocloud.guide.</p>
      <p>So I decided to speed up a bit.</p> `,},
    { date : '2023-06-30',
      content :`<p> Today is my birthday, and I spent all my time enjoying a wonderful time with my fiancé.</p>
      <p>I also decided to convert my journal into a weekly format.</p>        
 `,}, 
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
