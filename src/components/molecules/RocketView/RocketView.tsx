// react
import { FC, ReactElement } from 'react';

//  mui
import { Divider, Avatar, Grid, Typography, Stack } from '@mui/material';

// atoms
import { LunchStatus } from '@atoms/index';

// types
import { RocketViewProps } from './RocketView.props';

const RocketView: FC<RocketViewProps> = ({ flickrImages, rocket, missionName }): ReactElement => (
  <Grid container spacing={2} sx={{ marginTop: 20 }}>
    <Grid item xs={4}>
      <Avatar
        variant="rounded"
        src={flickrImages}
        alt={rocket?.name || ''}
        sx={{ width: 'auto', height: 1 }}
      />
    </Grid>

    <Grid item xs={8}>
      <Typography component="h4" variant="h3" sx={{ mb: 2 }}>
        {rocket?.name || ''} - {missionName}
      </Typography>
      <Typography variant="body2" paragraph sx={{ fontSize: '20px' }}>
        {rocket?.description || ''}
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
        <Typography variant="subtitle1" gutterBottom sx={{ m: 0 }}>
          {rocket?.company || ''} - {rocket?.country}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="subtitle1" gutterBottom sx={{ m: 0 }}>
          Cost per launch: {rocket?.costPerLaunch}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <LunchStatus status={!!rocket?.active} />
      </Stack>
    </Grid>
  </Grid>
);

export default RocketView;
