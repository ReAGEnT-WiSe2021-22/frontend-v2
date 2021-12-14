import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from '@mui/material';
import React from 'react';
import { Party } from '../../../../types';

type SelectFieldProps = {
  sx?: SxProps
  label?: string,
  value: string,
  options: typeof Party,
  disabled?: boolean,
  onChange: (event: SelectChangeEvent) => void,
  placeholder?: string,
}

export const SelectField: React.FunctionComponent<SelectFieldProps> = ({
  sx,
  label,
  value,
  options,
  disabled,
  onChange,
  placeholder,
}) => (
  <FormControl sx={sx}>
    <InputLabel>{label}</InputLabel>
    <Select
      value={value}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    >
      {Object.entries(options).map(([key, value]) => (
        <MenuItem key={key} value={value}>{value}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

SelectField.defaultProps = {
  sx: {},
  label: '',
  disabled: false,
  placeholder: '',
};
