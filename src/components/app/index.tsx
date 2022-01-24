import { setTableData } from 'actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import styles from './index.module.scss';

const App = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();
  const { formData } = useSelector((state: RootState) => state.formData);

  const inputChangeHandler = (value: any, type: string) => {
    switch (type) {
      case 'fname':
        setFname(value);
        break;
      case 'lname':
        setLname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNo':
        setPhoneNo(value);
        break;
      case 'city':
        setCity(value);
        break;
    }
  };

  const onSubmitFormHandler = () => {
    dispatch(setTableData({ fname, lname, email, phoneNo, city }));
  };

  return (
    <div className={styles.App}>
      <h1>User Form</h1>
      <form>
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(event) => inputChangeHandler(event.target.value, 'fname')}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(event) => inputChangeHandler(event.target.value, 'lname')}
        />
        <br />
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => inputChangeHandler(event.target.value, 'email')}
        />
        <br />
        <label htmlFor="mobile">Enter your phone no.:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={phoneNo}
          onChange={(event) =>
            inputChangeHandler(event.target.value, 'phoneNo')
          }
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(event) => inputChangeHandler(event.target.value, 'city')}
        />
        <br />
        <button type="button" onClick={onSubmitFormHandler}>
          Submit
        </button>
      </form>
      <hr />
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data) => (
            <tr key={data.phoneNo}>
              <td>{data.fname}</td>
              <td>{data.lname}</td>
              <td>{data.email}</td>
              <td>{data.phoneNo}</td>
              <td>{data.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
