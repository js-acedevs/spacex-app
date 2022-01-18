// react
import { FC, ReactElement } from 'react';

// next
import Link from 'next/dist/client/link';

//  mui
import { Divider, Avatar, Paper, Stack, Typography } from '@mui/material';

// atoms
import { LunchStatus } from '@atoms/index';

// types
import { LaunchCardProps } from './LaunchCard.props';

const LaunchCard: FC<LaunchCardProps> = ({ id, src, title, details, status }): ReactElement => (
  <Paper sx={{ height: '300px', p: 4 }}>
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      sx={{ mb: 2 }}
    >
      <Avatar alt={title} src={src} sx={{ width: 50, height: 50 }} />

      <Link passHref href={`/${id}`}>
        <Typography component="h4" variant="h5" sx={{ ':hover': { cursor: 'pointer' } }}>
          {title}
        </Typography>
      </Link>
    </Stack>

    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
      <Typography variant="body1" gutterBottom>
        {details.slice(0, 260)}...
      </Typography>
      <Divider sx={{ my: 2 }} />
      <LunchStatus status={status} />
    </Stack>
  </Paper>
);

export default LaunchCard;
