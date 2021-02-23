import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './flightsTable.scss';
import FlightsListHeader from './flights-list-header/FlightsListHeader';
import FlightsListBody from './flights-list-body/FlightsListBody';
import ChooseFlightText from './ChooseFlightText';


const FlightsTable = ({ searchedFlight }) => {
  return (
    <table className="flights-list">
      <FlightsListHeader />
      <Switch>
        <Route path="/:direction">
          <FlightsListBody searchedFlight={searchedFlight} />
        </Route>
        <Route exact path="/">
          <ChooseFlightText />
        </Route>
      </Switch>
    </table>
  );
};

export default FlightsTable;