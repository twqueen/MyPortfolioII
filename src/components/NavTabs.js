import React from 'react';
import './NavTabs.css'

const styles = {
  headerStyle: {
    textAlign: 'center',
    color: 'pink',
    fontSize: '3rem',
    fontWeight: 400,    
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="sticky-top bg-white">
      <header className="header" style={styles.headerStyle}>
        <img style={{
          resizeMode: 'left',
          height: '10rem',
        }}
          src="https://cutewallpaper.org/27/cartoon-dog-gif-wallpaper/dog-cartoon-gifs-get-the-best-gif-on-giphy.gif" 
          alt="corgi waving hello gif"
        />
        WELCOME TO TWQUEEN'S PORTFOLIO
      </header>
      <ul className="nav justify-content-center nav-pills p-3" >
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
