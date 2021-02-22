import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import qs from 'qs';

import './flightSearchPage.scss';
import '../flights-list/flightsList.scss';
import FlightsList from '../flights-list/FlightsList';
import { getFlightsList } from '../../flights.actions';
import { filteredFlightsListSelector } from '../../flights.selectors';
import SearchForm from '../search-form/SearchForm';
import FlightsNavigation from '../flights-navigation/FlightsNavigation';
import FlightsListHeader from '../flights-list/FlightsListHeader';

const FlightSearchPage = () => {
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);
  const dispatch = useDispatch();
  const flightsList = useSelector(state => filteredFlightsListSelector(state));
  
  const selectedFlight = qs.parse(search, { ignoreQueryPrefix: true }).search;

  const flights = selectedFlight
    ? flightsList.filter(flight => {
      const flightNumber = flight.flightN.toLowerCase();
      const destination = flight.destination.toLowerCase();
        return [flightNumber, destination].includes(
          selectedFlight.toLowerCase(),
        );
      })
    : flightsList;

  useEffect(() => {
    if (direction) {
      dispatch(getFlightsList(direction));
    }
  }, [direction, search]);

  return (
    <>
      <header className="search-flights__header">
        <h1>Search Flight</h1>
        <SearchForm direction={direction} />
      </header>
      <main className="search-flights__content">
        <FlightsNavigation />
        <table className="flights-list">
          <FlightsListHeader />
          <Switch>
            <Route path="/:direction">
              <FlightsList flights={flights} />
            </Route>
            <Route exact path="/">
              {null}
            </Route>
          </Switch>
        </table>
      </main>
    </>
  );
};

export default FlightSearchPage;
