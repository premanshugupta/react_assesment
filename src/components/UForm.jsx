import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { Container, TextField, MenuItem, Button, Box, Typography } from "@mui/material";
const UForm = () => {

    const [selectedOption, setSelectedOption] = useState("USERDATA");
    const [inputValue, setInputValue] = useState("");
    const [uuid, setUuid] = useState(uuidv4());

    const handleSave = () => {
        const formData = {
          selectedOption,
          inputValue,
          uuid,
        };
        console.log("Saved Data:", formData);
        alert("Data Saved! Check Console for Details");
      };

  return (
    
      <Container maxWidth="sm" sx={{ mt: 4, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        User Form
      </Typography>

      {/* Dropdown */}
      <TextField
        select
        fullWidth
        label="Select Option"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="USERDATA">JSON Object</MenuItem>
      </TextField>

      {/* Input Field */}
      <TextField
        fullWidth
        label="Enter Value"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* UUID Display */}
      <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 1, mb: 2 }}>
        <Typography variant="body1">UUID:</Typography>
        <Typography variant="body2" color="textSecondary">
          {uuid}
        </Typography>
      </Box>

      {/* Save Button */}
      <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
        Save
      </Button>
    </Container>
  
  )
}

export default UForm
