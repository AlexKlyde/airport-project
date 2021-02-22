import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './flightsNavigation.scss';

const FlightsNavigation = () => {
  const { search } = useLocation();

  return (
    <nav className="flights-navigation">
      <NavLink to={`/departure${search}`} activeClassName="selected">
        <i className="fas fa-plane-departure" />
        Departures
      </NavLink>
      <NavLink to={`/arrival${search}`} activeClassName="selected">
        <i className="fas fa-plane-arrival" />
        Arrivals
      </NavLink>
    </nav>
  );
};

export default FlightsNavigation;
