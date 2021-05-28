const formatDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year} year`;
};

const getMonths = () => {
  const months = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString('en', { month: 'long' });
  });

  const actualMonth = new Date().getMonth();
  return [...months.splice(actualMonth, 11), ...months.splice(0, actualMonth)];
};

const months = getMonths();

const sortDob = (a, b) => {
  const first = new Date(a.dob).getDate();
  const second = new Date(b.dob).getDate();
  if (first < second) return -1;
  if (first > second) return 1;
  return 0;
};

const sortBy = (a, b, property) => {
  if (a[property] > b[property]) return 1;
  if (a[property] < b[property]) return -1;
  return 0;
};

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(++i + 64));

export { formatDate, months, sortDob, sortBy, alphabet };
