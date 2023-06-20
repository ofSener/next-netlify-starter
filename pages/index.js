import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import LearningPath from './components/LearningPath';
import TechnicalJourney from './components/TechnicalJourney';
import whoami from './components/whoami'

const IndexPage = () => {
  const handleLinkedInClick = () => {
    // LinkedIn sayfasına yönlendirme işlemleri burada gerçekleştirilebilir
    window.location.href = 'https://www.linkedin.com/in/omerfaruksener/';
  };

  return (
    <div className="container">
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="centered">Ömer Faruk Şener</h1>

        <LearningPath />
        <hr />

        <h2 className="category">Who Am I</h2>
        <whoami />
        <hr />

        <h2 className="category">Technical Journey</h2>
        <TechnicalJourney />
        <hr />

        <div className="linkedin-icon" onClick={handleLinkedInClick}>
          <Image src="/linkedin-icon.png" alt="LinkedIn" width={40} height={40} />
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }
        .centered {
          text-align: center;
        }
        .category {
          text-align: center;
          margin-top: 40px;
        }
        .linkedin-icon {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
