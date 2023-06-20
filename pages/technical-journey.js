// TechnicalJourneyPage.js
import React from 'react';
import Link from 'next/link';

import TechnicalJourney from '../components/TechnicalJourney';

const TechnicalJourneyPage = () => {
  return (
    <div className="page-container">
      <h1>Technical Logs</h1>
      
      <div className="content-container">
        <TechnicalJourney />
      </div>
      
      <Link href="/">
        <a>Go Back to Home</a>
      </Link>
      
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .content-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default TechnicalJourneyPage;
