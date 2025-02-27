import React, { useEffect, useState } from 'react'
import { Button, TextField, Box, Grid, Paper, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
// import { v4 as uuidv4 } from "uuid";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Counter = () => {
  const [count, setCount] = useState(0)

  const backgroundStyle = useSpring({
    backgroundColor: `rgba(100, 149, 237, ${count * 0.1})`, // Gradual color change
  });

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  
  return (
    <div>
      <Paper elevation={3} style={{ padding: "2rem", textAlign: "center" }}>
      <animated.div style={{ ...backgroundStyle, padding: "1rem", borderRadius: "8px" }}>
        <Typography variant="h5">Counter: {count}</Typography>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant="contained" color="error" onClick={() => setCount(0)}>
          Reset
        </Button>
      </animated.div>
    </Paper>
    </div>
  )
}

export default Counter
