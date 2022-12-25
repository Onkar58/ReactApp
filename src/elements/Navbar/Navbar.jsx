import React from 'react'
import PropTypes from 'prop-types';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar({ info }) {
  return (
    <nav>
      <div className={classes.navbar}>
        <ul>
          {info.map((currentValue, index) => <li><NavLink to={currentValue.url}>{currentValue.name}</NavLink></li>)}
        </ul>
      </div>
    </nav>
  )

}

export { Navbar };

Navbar.propTypes = { titles: PropTypes.object };