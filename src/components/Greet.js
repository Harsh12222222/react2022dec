import React from 'react'

export default function Greet(props) {
    
  let {email,fullName,gender,location} = props.personDetails

  return (
    <div>
      {/* <h1>{props.personDetails.email}</h1>
      <h2>{props.personDetails.fullName}</h2>
      <h3>{props.personDetails.gender}</h3>
      <h4>{props.personDetails.location}</h4> */}
      
      {/* After destructure */}
      <h1>{email}</h1>
      <h2>{fullName}</h2>
      <h3>{gender}</h3>
      <h4>{location}</h4>
      
    </div>
  )
}


/* props:{
    personDetails = {
          email:'info@gmail.com',
          fullName: 'Info Roy',
          gender: 'Male',
          location:'INDIA'
      }
} */