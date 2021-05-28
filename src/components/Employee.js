import RadioButtons from './RadioButtons';

function Employee({ user, isActive, onChange }) {
  return (
    <li>
      <strong style={isActive(user) ? { color: 'blue' } : { color: 'black' }}>
        {user.lastName.concat(' ', user.firstName)}
      </strong>
      <RadioButtons onChangeOption={(flag) => onChange(flag, user)} initialState={isActive(user)} />
    </li>
  );
}

export default Employee;
