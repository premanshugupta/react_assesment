import React from "react";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import UserForm from "./components/UserForm";
import { Container, Grid } from "@mui/material";

const App = () => {
  return (
    <Container sx={{ marginTop: 3 }}>
      {/* Grid for Counter (Left) & RichTextEditor (Right) */}
      <Grid container spacing={3} alignItems="stretch">
        {/* Counter on the Left */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Counter />
        </Grid>

        {/* RichTextEditor on the Right */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <RichTextEditor />
        </Grid>
      </Grid>

      {/* UserForm Component (Below the Counter & Editor) */}
      <Grid container spacing={3} sx={{ marginTop: 3 }} justifyContent="center">
        <Grid item xs={12} md={6}>
          <UserForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <UserForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
