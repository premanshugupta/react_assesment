import React, { useState } from 'react'
import { Paper, Typography, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

// aare yahi to hai vo json object?
//  aare
const UserForm = () => {
  const [user,setUser] = useState({
    id : uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
  })
  const handleChange =(e)=>{
    setUser({user,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(user));
    alert("User data saved!");
  };
  return (
    <div>
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h5">User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={user.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Address" name="address" value={user.address} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" type="email" value={user.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Phone" name="phone" type="tel" value={user.phone} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Paper>
    </div>
  )
}

export default UserForm
