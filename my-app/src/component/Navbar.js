import React from 'react';
import './Navbar.css';


export default () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#1">
      <svg width="36" height="36" className="octicon octicon-checklist" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16 8.5l-6 6-3-3L8.5 10l1.5 1.5L14.5 7 16 8.5zM5.7 12.2l.8.8H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v6.5l-.8-.8c-.39-.39-1.03-.39-1.42 0L5.7 10.8a.996.996 0 0 0 0 1.41v-.01zM4 4h5V3H4v1zm0 2h5V5H4v1zm0 2h3V7H4v1zM3 9H2v1h1V9zm0-2H2v1h1V7zm0-2H2v1h1V5zm0-2H2v1h1V3z"
        />
      </svg>
      Swapi
    </a>
    <div className="text-right">
      <div className="userContainer">
        <img
          className="rounded-circle small"
         // src="https://cdn.imgbin.com/19/22/1/imgbin-anakin-skywalker-walt-disney-imagineering-computer-icons-sith-star-wars-darth-vader-darth-vader-illustration-Yupd3T4WrgD5BauBy1qcGqBUS.jpg"
          alt=""
        />
     
      </div>
    </div>
     
  </nav>
);