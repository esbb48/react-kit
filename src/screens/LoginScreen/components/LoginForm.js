import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Link, Typography } from '@material-ui/core';
import { TextField } from 'components/Form';
import * as yup from 'yup';

const schema = yup.object({
  account: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Box sx={{ m: 3, textAlign: 'center' }}>
          <Typography color='textPrimary' variant='h2'>
            Console Platform
          </Typography>
        </Box>
        <TextField
          {...register('account')}
          errorMessage={errors.account?.message}
          label='Account'
          name='account'
          type='account'
        />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label='Password'
          name='password'
          type='password'
          autoComplete='current-password'
        />
        <Box sx={{ py: 2 }}>
          <Button
            color='primary'
            fullWidth
            size='large'
            type='submit'
            variant='contained'
          >
            Sign in now
          </Button>
        </Box>
        <Typography color='textSecondary' variant='body1'>
          Don&apos;t have an account?{' '}
          <Link
            component={RouterLink}
            to='/register'
            variant='h6'
            underline='hover'
          >
            Sign up
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default LoginForm;
