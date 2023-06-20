// WhoAmIPage.js
import React from 'react';
import Link from 'next/link';

import WhoAmI from '../components/WhoAmI';

const WhoAmIPage = () => {
  return (
    <div className="page-container">
      <h1>Who Am I?</h1>
      
      <div className="content-container">
        <WhoAmI />
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

export default WhoAmIPage;
