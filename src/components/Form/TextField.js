import React from 'react';
import { TextField as BaseTextField } from '@material-ui/core';

const TextField = React.forwardRef(({ errorMessage, ...rest }, ref) => {
  return (
    <BaseTextField
      inputRef={ref}
      error={Boolean(errorMessage)}
      helperText={errorMessage}
      {...rest}
    />
  );
});

TextField.propTypes = {};

TextField.defaultProps = {
  errorMessage: '',
  type: 'text',
  margin: 'normal',
  variant: 'outlined',
  fullWidth: true,
};

export default TextField;
