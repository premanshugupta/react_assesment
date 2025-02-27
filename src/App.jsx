import React from "react";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import UserForm from "./components/UserForm";
import { Container, Grid } from "@mui/material";
import UForm from "./components/UForm";

const App = () => {
  return (
    <Container sx={{ marginTop: 3 }}>
    
      <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Counter />
        </Grid>

       
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <RichTextEditor />
        </Grid>
      </Grid>

     
      <Grid container spacing={3} sx={{ marginTop: 3 }} justifyContent="center">
        <Grid item xs={12} md={6}>
          {/* <UserForm />/ */}
          <UForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <UserForm />
        </Grid>
      </Grid>
    </Container>
   
  );
};

export default App;
