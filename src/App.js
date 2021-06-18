
import './App.css';
import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from './graphql/User/createUser'

function App() {
  const [fname, setfirstName] = useState("")
  const [lname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [Phone, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const [addUser, {error}] = useMutation(CREATE_USER_MUTATION, {
      onCompleted: (data) => {
        console.log('result', data.signUp.accessToken) // the response
      },
      onError: (error) => {
        console.log(error); // the error if that is the case
      },
    })
 
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('hit')
      addUser({variables: {
        firstName: fname,
        lastName: lname,
        email: email,
        Address: Address,
        country: country,
        phone_number: Phone,
        password: password
      }})
    }


  return (
    <div >
      <form  onSubmit={handleSubmit} >  
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value={fname} onChange={(event) => setfirstName(event.target.value)}/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value={lname} onChange={(event) => setlastName(event.target.value)} /><br/>
  <label for="lname">email:</label><br/>
  <input type="text" id="email" name="email"  value={email} onChange={(event) => setEmail(event.target.value)} /><br/>
  <label for="lname">Address:</label><br/>
  <input type="text" id="Address" name="Address" value={Address} onChange={(event) => setAddress(event.target.value)} /><br/>
  <label for="lname">country:</label><br/>
  <input type="text" id="country" name="country" value={country} onChange={(event) => setCountry(event.target.value)} /><br/>
  <label for="lname">phone_number:</label><br/>
  <input type="text" id="phone_number" name="phone_number" value={Phone} onChange={(event) => setPhoneNumber(event.target.value)}  /><br/>
  <label for="lname">password:</label><br/>
  <input type="text" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} /> <br/>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
