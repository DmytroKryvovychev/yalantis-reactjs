import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import EmployeesList from '../components/EmployeesList';
import BirthdaysList from '../components/BirthdaysList';
import Divider from '../components/Divider';
import { Birthdays } from '../Context';

const BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

const sortBy = (a, b, property) => {
  if (a[property] > b[property]) return 1;
  if (a[property] < b[property]) return -1;
  return 0;
};

function Employees() {
  const [users, setUsers] = useState(null);
  const [birthdays, setBirthdays] = useState([]);
  const [active, setActive] = useContext(Birthdays);
  const [loadingText, setLoadingText] = useState('Loading data...');

  useEffect(() => {
    if (active && active.length > 0) {
      setBirthdays(active);
    }

    axios
      .get(BASE_URL)
      .then(({ data }) => setUsers(data.sort((a, b) => sortBy(a, b, 'lastName'))))
      .catch((err) => {
        console.log(err);
        setLoadingText('Error on loading data. Restart page');
      });
  }, []);

  const handleCheckEmployee = (flag, user) => {
    let data;
    if (flag) {
      data = [...birthdays, user];
    } else {
      data = birthdays.filter((b) => b.id !== user.id);
    }

    localStorage.setItem('dates', JSON.stringify(data));
    setBirthdays(data);
  };

  return (
    <div className="container">
      {users ? (
        <>
          <EmployeesList onChange={handleCheckEmployee} users={users} active={birthdays} />
          <Divider width={2} color="black" />
          <BirthdaysList birthdays={birthdays} />
        </>
      ) : (
        <p>{loadingText}</p>
      )}
    </div>
  );
}

export default Employees;
