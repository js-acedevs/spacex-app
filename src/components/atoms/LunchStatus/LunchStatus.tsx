// react
import { FC, ReactElement } from 'react';

//  mui
import CircleIcon from '@mui/icons-material/Circle';
import { Stack, Typography } from '@mui/material';

// types
import { LunchStatusProps } from './LunchStatus.props';

const LunchStatus: FC<LunchStatusProps> = ({ status }): ReactElement => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    spacing={0}
    sx={{ height: '20px' }}
  >
    <Typography variant="overline" gutterBottom sx={{ fontSize: '16px', lineHeight: '18px', m: 0 }}>
      Launch success
    </Typography>
    <CircleIcon sx={{ widows: '16px', height: '16px' }} color={status ? 'success' : 'error'} />
  </Stack>
);

export default LunchStatus;
