import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Snackbar } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import './App.css';
import { Margin } from '@mui/icons-material';

function App() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
  });

  // To be propogated down to children components
  const alert = (message) => {
    setSnackbar({
      open: true,
      message,
    });
  };
  return (
    <>
      <Header />
      <RegisterForm alert={alert} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        // Clear the snackbar state on close
        onClose={() => setSnackbar({ open: false, message: '' })}
        message={snackbar.message}
      />
    </>
  );
}

export default App;
