import { useContext } from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import ThemeContext from '../components/states/theme/themeContext.js';

export default function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme} variant="contained">
      Click me to change the background
    </Button>
  );
}
