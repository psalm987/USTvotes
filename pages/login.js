import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" color="textSecondary" gutterBottom>
          Staff Directory
        </Typography>
        <TextField variant="outlined" label="ID" sx={{ mb: 2 }} fullWidth />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          sx={{ mb: 2 }}
          fullWidth
        />
        <Button variant="contained" size="large" fullWidth>
          Continue
        </Button>
      </Container>
    </Box>
  );
}
