import './biodata.css';
import React, { useState } from 'react';

const BiodataForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [ninNumber, setNinNumber] = useState('');
  const [contact, setContact] = useState('');
  const [profession, setProfession] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      age,
      gender,
      maritalStatus,
      ninNumber,
      contact,
      profession,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <table border={1}>
        <tr>
          <td>
            <label htmlFor="firstName">First Name:</label>
          
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </td> 
            
            {/* <br /> */}
          <td>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            </td>
            <br />
            </tr>
            <tr>
              <td>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            </td>
            <br />
            </tr>
            <tr>
              <td>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            </td>
            </tr>

            <tr>
              <td>
            <label htmlFor="maritalStatus">Marital Status:</label>
            <select
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value=""></option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            <br />
            </td>
            </tr>

            <tr>
              <td>
            <label htmlFor="ninNumber">NIN Number:</label>
            <input
              type="text"
              id="ninNumber"
              value={ninNumber}
              onChange={(e) => setNinNumber(e.target.value)}
            />
            <br />
            </td>
            </tr>

            <tr>
              <td>
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
            </td>
            </tr>

            <tr>
              <td>
            <label htmlFor="profession">Profession:</label>
            <input
              type="text"
              id="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
            <br />
            </td>
            </tr>

            <button type="submit">Submit</button>
        </table>
    </form>
  );
};

export default BiodataForm;