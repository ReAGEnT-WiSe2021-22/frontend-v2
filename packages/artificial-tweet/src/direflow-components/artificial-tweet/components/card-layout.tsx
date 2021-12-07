import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';

export const CardLayout: React.FunctionComponent<{ title: string }> = ({ title, children }) => (
  <Card sx={{ minWidth: 400 }}>
    <CardHeader title={title} />
    <CardContent>
      {children}
    </CardContent>
  </Card>
);
