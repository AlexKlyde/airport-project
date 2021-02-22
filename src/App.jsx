import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import FlightSearchPage from './features/flights/components/flight-search-page/FlightSearchPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="search-flights">
          <FlightSearchPage />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
