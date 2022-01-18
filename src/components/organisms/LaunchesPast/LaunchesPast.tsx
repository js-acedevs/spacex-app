// react
import { ReactElement } from 'react';

// mui
import { Typography, Stack, Grid } from '@mui/material';

// atoms
import { If } from '@atoms/index';

// molecules
import { LaunchCard, Pagination } from '@molecules/index';

// graphql
import useGetAllLaunchesPast from '@graphql/hooks/useGetAllLaunchesPast';

const LaunchesPast = (): ReactElement => {
  // graphql hook
  const { result, loading, total } = useGetAllLaunchesPast({});

  return (
    <>
      <If condition={!!result?.length}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginY: 8 }}>
          {result?.map((launch) => (
            <Grid item sm={6} key={launch?.id}>
              <LaunchCard
                id={launch?.id || ''}
                src={launch?.links?.missionPatchSmall || ''}
                details={launch?.details || ''}
                title={launch?.missionName || ' '}
                status
              />
            </Grid>
          ))}
        </Grid>
      </If>
      <If condition={!!result?.length && !!total}>
        <Pagination count={total} />
      </If>

      <If condition={!result?.length && !loading}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ mt: 20 }}
        >
          <Typography variant="h4" gutterBottom>
            Not found LaunchesPast
          </Typography>
        </Stack>
      </If>
    </>
  );
};

export default LaunchesPast;
