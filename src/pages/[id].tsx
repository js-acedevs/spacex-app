// next
import type { NextPage } from 'next';

// mui
import { Container, Typography } from '@mui/material';

// molecules
import { SearchField } from '@molecules/index';

// templates
import { BaseLayout } from '@templates/index';

const RocketView: NextPage = () => (
  <BaseLayout title="Rocket">
    <Container maxWidth="lg">
      <SearchField />

      <Typography variant="h4" align="center">
        Welcome to RocketView
      </Typography>
    </Container>
  </BaseLayout>
);

export default RocketView;
