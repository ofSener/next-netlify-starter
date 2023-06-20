import React from 'react';

const WhoAmI = () => {
  return (
    <div>
      <h2>Honestly Who Am I?</h2>
      <p>
        I was born in June 1998. My interest in computers started when I was 2.5 years old thanks to my father being a
        computer technician. Since the computer came to our house when I was very young, I learned to play games,
        install programs, remove and plug in hardware much earlier than my peers.
      </p>
      <p>
        I got a silver medal in the Mathematics Olympiad in the 4th grade of primary school. In the 5th grade of primary
        school, I made my first computer game alone and without knowing English. The game I made was played a lot in the
        school labs in middle school and on smart boards in high school.
      </p>
      <p>
        I interacted with all kinds of computer equipment and all kinds of people at my father's workplace. I think that
        this is why I have good relations with people I have just met. Also, my sales, listening, solution generation,
        planning, and research skills have improved at my father's workplace. When I was a 1st-year student at Gebze
        Technical University Computer Engineering department, I had to research and learn a lot of things when I entered
        the ISS provider business without knowing anything. While I was doing research, the cloud industry caught my
        attention a lot. I could not decide on my field for many years and I decided to choose the cloud sector. After
        many years of goalless living, this has been very good to me, and I will do my best to be the best in the Cloud
        industry.
      </p>

      <div className="section">
        <h3>My Strengths</h3>
        <ul>
          <li>Competitive</li>
          <li>Pressure-free</li>
          <li>Easily adapting teamwork</li>
          <li>Good planner</li>
          <li>Leading spirit</li>
          <li>Creativeness</li>
          <li>Presentation to large groups</li>
        </ul>
      </div>

      <div className="section">
        <h3>Which I Can Improve</h3>
        <ul>
          <li>Taking too many risks</li>
          <li>Taking too much responsibility</li>
          <li>Being too detail-oriented</li>
        </ul>
      </div>

      <style jsx>{`
        h2 {
          text-align: center;
        }
        .section {
          margin-top: 40px;
        }
        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default WhoAmI;
