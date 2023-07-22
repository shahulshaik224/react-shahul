import React from 'react'

export default function EmpProfile(props) {
  return (
    <div>
        <table border="2px"><tr><td>Name</td><td>{props.name}</td></tr>
        <tr><td>Id Number</td><td>{props.IdNumber}</td></tr>
        <tr><td>Phone Number</td><td>{props.PhoneNumber}</td></tr>
        <tr><td>Email Id</td><td>{props.Email}</td></tr>
        <tr><td>Age</td><td>{props.Age}</td></tr>
        <tr><td>Date of Birth</td><td>{props.Date}-{props.Month}-{props.Year}</td></tr>
        </table>
    </div>
  )
}
