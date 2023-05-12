import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faStackOverflow,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* {Adding a footer with links} */}
      <footer style={{ background: 'black', }} className='footer mh-20 fixed-bottom text-center p-2'>
        <a href="https://github.com/twqueen" className="link-danger px-2">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://google.com" className="link-danger px-2">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
        <a href="https://stackoverflow.com/" className="link-danger px-2">
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        </a>
        <a href="https://www.linkedin.com/" className="link-danger px-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </footer>
    </div>
  );
}
