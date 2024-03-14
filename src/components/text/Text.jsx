import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const TextComponent = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={0} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center"  gutterBottom >
            Online Shop
          </Typography>
          <Typography variant="body1" align="justify" paragraph sx={{padding: "12px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut posuere magna. Vivamus interdum
            venenatis ultricies. Nullam at pharetra lacus. Curabitur eget gravida ante, id dignissim risus. Etiam
            euismod tortor auctor, placerat libero ut, pretium nulla.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TextComponent;
