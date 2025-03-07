import * as React from 'react';
import { useState } from 'react';
import { Paper, CardHeader, CardContent, TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const RegisterForm = (props) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    firstNameHelperText: '',
    lastName: false,
    lastNameHelperText: '',
    email: false,
    emailHelperText: '',
    username: false,
    usernameHelperText: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // extract name and value from the event target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Dynamic validation while typing
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === '',
      [`${name}HelperText`]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '',
    }));
    console.log(form);
    console.log(errors);
  };

  const validate = () => {
    let valid = true;
    let newErrors = {
      firstName: false,
      firstNameHelperText: '',
      lastName: false,
      lastNameHelperText: '',
      email: false,
      emailHelperText: '',
      username: false,
      usernameHelperText: '',
    };

    Object.keys(form).forEach((key) => {
      if (form[key].trim() === '') {
        valid = false;
        newErrors[key] = true;
        newErrors[`${key}HelperText`] = 'Field Required';
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    // handle data transfer here...

    // clear the form
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
    });
    props.alert('Account created successfully');
  };

  return (
    <Paper elevation={4} sx={{ marginTop: '1em', marginLeft: '1em', marginRight: '1em', padding: '0.5em' }}>
      <CardHeader title="Create Account" />
      <CardContent>
        <TextField
          fullWidth
          name="firstName"
          label="First Name"
          value={form.firstName}
          error={errors.firstName}
          helperText={errors.firstNameHelperText}
          onChange={handleChange}
          sx={{ marginBottom: '1em' }}
        />
        <TextField
          fullWidth
          name="lastName"
          label="Last Name"
          value={form.lastName}
          error={errors.lastName}
          helperText={errors.lastNameHelperText}
          onChange={handleChange}
          sx={{ marginBottom: '1em' }}
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={form.email}
          error={errors.email}
          helperText={errors.emailHelperText}
          onChange={handleChange}
          sx={{ marginBottom: '1em' }}
        />
        <TextField
          fullWidth
          name="username"
          label="Username"
          value={form.username}
          error={errors.username}
          helperText={errors.usernameHelperText}
          onChange={handleChange}
          sx={{ marginBottom: '1em' }}
        />
        <Fab color="primary" aria-label="add" onClick={handleSubmit} sx={{ position: 'fixed', bottom: 16, right: 16, fontSize: '1.5em' }}>
          <AddIcon />
        </Fab>
      </CardContent>
    </Paper>
  );
};

export default RegisterForm;
