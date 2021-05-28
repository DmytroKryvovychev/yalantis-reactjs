import React from 'react';

import RadioButtons from './RadioButtons';
import Employee from './Employee';

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(++i + 64));

function EmployeesList({ onChange, users, active }) {
  const birthdays = active;

  const isActive = (user) => {
    return birthdays && birthdays.find((u) => u.id === user.id);
  };

  const filterUsers = (letter) => {
    return users.filter((user) => user.lastName.substr(0, 1) === letter);
  };

  return (
    <div className="employees__container">
      <h2>Employees</h2>
      <div className="employees__content">
        {users &&
          alphabet.map((letter, idx) => (
            <div key={`letter-${letter}-idx-${idx}`} style={{ padding: 10 }}>
              <h2>{letter}</h2>
              <ul>
                {filterUsers(letter).length > 0 ? (
                  filterUsers(letter).map((user, idx) => (
                    <Employee
                      key={`emp-idx-${idx}`}
                      user={user}
                      isActive={isActive}
                      onChange={onChange}
                    />
                  ))
                ) : (
                  <li>---</li>
                )}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EmployeesList;
