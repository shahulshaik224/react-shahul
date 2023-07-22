
import './App.css';
import EmpProfile from './ui/EmpProfile'
import { useState } from 'react';
function App() {
  const [name,setName] = useState('');
  const [IdNumber,setIdNumber] = useState(0);
  const [PhoneNumber,setPhoneNumber] = useState(0);
  const [Email,setEmail] = useState('');
  const [Age,setAge] = useState(0);
  const[Date,setDate]=useState(0);
  const[Month,setMonth]=useState(0);
  const[Year,setYear]=useState(0);
  return (
   
    <div align="center">
      <table>
        <tr><th>Name</th><td><input type="text" onChange={(event)=>{setName(event.target.value)}}/></td></tr>
        <tr><th>Id Number</th><td><input type="text" onChange={(event)=>{setIdNumber(event.target.value)}}/></td></tr>
        <tr><th>Phone Number</th><td><input type="text" onChange={(event)=>{setPhoneNumber(event.target.value)}}/></td></tr>
        <tr><th>Email</th><td><input type="text" onChange={(event)=>{setEmail(event.target.value)}}/></td></tr>
        <tr><th>Age</th><td><input type="text" onChange={(event)=>{setAge(event.target.value)}}/></td></tr>
       <tr><td>Date of Birth</td><td>Date <select onChange={(event)=>{setDate(event.target.value)}}><option>select</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option></select>
            Month <select onChange={(event)=>{setMonth(event.target.value)}}><option>select</option><option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>July</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option></select>
            Year<select onChange={(event)=>{setYear(event.target.value)}}><option>select</option><option>1999</option><option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option><option>2005</option><option>2006</option><option>2007</option><option>2008</option><option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option>2022</option><option>2023</option></select></td></tr>
  </table>
     <EmpProfile name={name}
     IdNumber={IdNumber}
      PhoneNumber={PhoneNumber}
      Email={Email}
      Age={Age}
      Date={Date}
      Month={Month}
      Year={Year}/>
    </div>
  );
}

export default App;
