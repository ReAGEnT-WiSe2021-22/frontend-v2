import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Chip,
  FormControl,
  IconButton,
  Stack,
  SxProps,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

type MultiInputFieldProps = {
  sx?: SxProps
  label?: string
  values: string[]
  disabled?: boolean
  onChange: (newValue: string[]) => void
  placeholder?: string
}

export const MultiInputField: React.FunctionComponent<MultiInputFieldProps> = ({
  sx,
  label,
  values = [],
  disabled,
  onChange,
  placeholder,
}) => {
  const onNew = (value: string) => onChange([...(values || []), value]);
  const onRemove = (value: string) => {
    const newValues = [...values];
    newValues.splice(newValues.indexOf(value), 1);
    onChange(newValues);
  };

  const [value, setValue] = useState<string>('');

  const handleClick = (e: React.BaseSyntheticEvent) => {
    if (value.length >= 3) {
      e.preventDefault();
      onNew(value);
      setValue('');
    }
  };

  const keyPressed = (e: React.KeyboardEvent) => {
    if (e.charCode === 13) handleClick(e);
  };

  return (
    <Stack sx={sx}>
      <Stack sx={{ position: 'relative' }} marginBottom={0.5}>
        <FormControl>
          <TextField
            placeholder={placeholder}
            value={value}
            label={label}
            variant="outlined"
            onKeyPress={keyPressed}
            onChange={(e) => setValue(e.target.value)}
            disabled={disabled}
            fullWidth
          />
        </FormControl>
        <IconButton sx={{ position: 'absolute', right: '1rem', top: '0.5rem' }} onClick={handleClick} disabled={!value}>
          <AddCircleIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" display="flex" flexWrap="wrap" maxWidth={300}>
        {values.map((value) => (
          <Chip
            sx={{ marginTop: '0.5rem', marginRight: '0.5rem' }}
            key={value}
            label={value}
            onDelete={() => onRemove(value)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

MultiInputField.defaultProps = {
  sx: {},
  label: '',
  disabled: false,
  placeholder: '',
};
