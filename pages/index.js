import React from 'react';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to My Website</h1>
      <div className="menu-container">
        <div className="menu-item">
          <h2 className="section-title">Learning Path</h2>
          <Link href="/learning-path">
            <a className="section-link">Go to Learning Path</a>
          </Link>
        </div>
        <div className="menu-item">
          <h2 className="section-title">Technical Journey</h2>
          <Link href="/technical-journey">
            <a className="section-link">Go to Technical Journey</a>
          </Link>
        </div>
        <div className="menu-item">
          <h2 className="section-title">Who Am I?</h2>
          <Link href="/who-am-i">
            <a className="section-link">Go to Who Am I?</a>
          </Link>
        </div>
      </div>

      <div className="author-container">
        <h3 className="author-name">Ömer Faruk Şener</h3>
        <a
          href="https://www.linkedin.com/in/omerfaruksener/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
        </a>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f2f2f2;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .menu-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 60%;
          margin-top: 2rem;
        }
        .menu-item {
          text-align: center;
          width: 33%;
        }
        .section-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .section-link {
          font-size: 1.4rem;
          color: #0070f3;
          text-decoration: none;
        }
        .section-link:hover {
          text-decoration: underline;
        }
        .author-container {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .author-name {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }
        .linkedin-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #000;
        }
        .linkedin-icon {
          width: 48px;
          height: 48px;
          margin-left: 0.5rem;
        }

        /* Medya sorgusu */
        @media (max-width: 768px) {
          .menu-container {
            width: 80%;
          }
          .menu-item {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
