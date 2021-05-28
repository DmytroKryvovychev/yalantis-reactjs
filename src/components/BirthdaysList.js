function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year} year`;
}

const getMonths = Array.from({ length: 12 }, (e, i) => {
  return new Date(null, i + 1, null).toLocaleDateString('en', { month: 'long' });
});

const actualMonths = () => {
  const actualMonth = new Date().getMonth();
  return [...getMonths.splice(actualMonth, 11), ...getMonths.splice(0, actualMonth)];
};

const months = actualMonths();

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
              .sort((a, b) => {
                const first = new Date(a.dob).getDate();
                const second = new Date(b.dob).getDate();
                if (first < second) return -1;
                if (first > second) return 1;
                return 0;
              })
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
        <h3 className="no_emp">No selected employees</h3>
      )}
    </div>
  );
}

export default BirthdaysList;
