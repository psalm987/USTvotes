import React, { useContext } from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThemeContext from '../components/states/theme/themeContext.js';

function Headline() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Box p={0} m={0}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ my: { xs: 8, md: 16 } }}>
            <Typography variant="h2" gutterBottom>
              Make a statement, cast your vote
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Your voice is your vote, show solidarity to the most qualified
              leader by casting a vote in their favor.
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
                backgroundColor: 'primary.light',
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

function Countdown() {
  const [Dday, setDday] = React.useState(new Date(2023, 5, 5));
  const [display, setDisplay] = React.useState({
    day: 0,
    hour: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    setInterval(() => {
      setDisplay((prevDisplay) => {
        const currentTime = new Date();
        if (currentTime > Dday) {
          return {
            day: 0,
            hour: 0,
            minutes: 0,
            seconds: 0,
          };
        }
        const diff = new Date(Dday - currentTime);
        return {
          day: Math.floor(diff.getTime() / (1000 * 60 * 60 * 24)),
          hour: diff.getHours(),
          minutes: diff.getMinutes(),
          seconds: diff.getSeconds(),
        };
      });
    }, 1000);
  }, []);

  if (Object.values(display).every((i) => i === 0)) return <React.Fragment />;

  return (
    <Box py={{ xs: 8, md: 16 }}>
      <Container>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Countdown to the next Election
        </Typography>
        <Grid spacing={4} container justifyContent="center" alignItems="center">
          <Grid item xs={6} md={3}>
            <Typography variant="h3" textAlign="center" gutterBottom>
              {display.day}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              textAlign="center"
              component="p"
              sx={{ textTransform: 'uppercase' }}
            >
              days
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h3" textAlign="center" gutterBottom>
              {display.hour}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              textAlign="center"
              component="p"
              sx={{ textTransform: 'uppercase' }}
            >
              hours
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h3" textAlign="center" gutterBottom>
              {display.minutes}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              textAlign="center"
              component="p"
              sx={{ textTransform: 'uppercase' }}
            >
              minutes
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h3" textAlign="center" gutterBottom>
              {display.seconds}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              textAlign="center"
              component="p"
              sx={{ textTransform: 'uppercase' }}
            >
              seconds
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <Headline />
      <Countdown />
    </React.Fragment>
  );
}
