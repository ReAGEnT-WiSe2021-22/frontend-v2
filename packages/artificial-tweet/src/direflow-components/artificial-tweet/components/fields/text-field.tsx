import { FormControl, SxProps, TextField } from '@mui/material';
import React, { useState } from 'react';

type CustomTextFieldProps = {
  sx?: SxProps
  label?: string
  value: string
  disabled?: boolean
  onChange: (newValue: string) => void
  placeholder?: string
}

export const CustomTextField: React.FunctionComponent<CustomTextFieldProps> = ({
  sx,
  label,
  value,
  disabled,
  onChange,
  placeholder,
}) => {
  const [v, setV] = useState(value);
  React.useEffect(() => {
    /// This is a hack to speed up rendering effect
    onChange(v);
  }, [v, onChange]);

  return (
    <FormControl sx={sx}>
      <TextField
        placeholder={placeholder}
        value={value}
        label={label}
        variant="outlined"
        onChange={(e) => setV(e.target.value)}
        disabled={disabled}
        fullWidth
      />
    </FormControl>
  );
};

CustomTextField.defaultProps = {
  sx: {},
  label: '',
  disabled: false,
  placeholder: '',
};
