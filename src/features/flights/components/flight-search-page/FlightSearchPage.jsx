import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import qs from 'qs';

import './flightSearchPage.scss';
import '../flights-list/flightsList.scss';
import { getFlightsList } from '../../flights.actions';
import SearchForm from '../search-form/SearchForm';
import FlightsNavigation from '../flights-navigation/FlightsNavigation';
import FlightsListHeader from '../flights-list/FlightsListHeader';
import FlightsListBody from '../flights-list/FlightsListBody';

const FlightSearchPage = () => {
  const { pathname, search } = useLocation();
  const direction = pathname.slice(1);
  const dispatch = useDispatch();
  
  const searchedFlight = qs.parse(search, { ignoreQueryPrefix: true }).search;

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
              <FlightsListBody searchedFlight={searchedFlight} />
            </Route>
            <Route exact path="/">
              <tr>
                <td className="no-flights" colSpan="6">
                  Choose flight
                </td>
              </tr>
            </Route>
          </Switch>
        </table>
      </main>
    </>
  );
};

export default FlightSearchPage;
