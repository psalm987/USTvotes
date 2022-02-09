import React, { useContext } from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThemeContext from '../components/states/theme/themeContext.js';

function Section1() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Box p={0} m={0}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ my: { xs: 2, md: 8 } }}>
            <Typography variant="h2" gutterBottom>
              Make a statement, cast your vote
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Your voice is your vote, show solidarity to the most qualified
              leader by casting a vote in. their favor.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={{ textTransform: 'none', mt: 2 }}
              onClick={toggleTheme}
            >
              View candidates
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: 'secondary.main',
                height: 1,
                width: 1,
                minHeight: '300px',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <Section1 />
    </React.Fragment>
  );
}
