import PropTypes from 'prop-types';

import { formatDate, months, sortDob } from '../functions';

function BirthdaysList({ birthdays }) {
  const filterBirthdays = (month) => {
    return birthdays.filter(
      (b) => new Date(b.dob).toLocaleString('en', { month: 'long' }) === month,
    );
  };

  return (
    <div className="birthdays__content">
      <h2>Employees birthday</h2>

      {birthdays.length > 0 ? (
        months.map((m) => (
          <ul key={m}>
            <h3>{filterBirthdays(m).length > 0 && m}</h3>
            {filterBirthdays(m)
              .sort(sortDob)
              .map((b, idx) => {
                return (
                  <li
                    key={`firstName-${b.firstName}-lastName-${b.lastName}-idx-${idx}`}
                    style={{ marginLeft: 20 }}>
                    <strong>
                      {`${b.lastName.concat(' ', b.firstName)} - ${formatDate(new Date(b.dob))}`}
                    </strong>
                  </li>
                );
              })}
          </ul>
        ))
      ) : (
        <h3 className="no_emp">Employees List is empty</h3>
      )}
    </div>
  );
}

BirthdaysList.propTypes = {
  birthdays: PropTypes.array.isRequired,
};

export default BirthdaysList;
