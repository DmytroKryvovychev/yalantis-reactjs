import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Employees from './pages/Employees';
import { Birthdays } from './Context';

const dates = JSON.parse(localStorage.getItem('dates'));

function App() {
  const [birthdays, setBirthdays] = useState(dates);

  return (
    <Birthdays.Provider value={[birthdays, setBirthdays]}>
      <div className="App">
        <Switch>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="*">
            <Redirect to="/employees" />
          </Route>
        </Switch>
      </div>
    </Birthdays.Provider>
  );
}

export default App;
