// next
import { NextPage } from 'next';

// mui
import { Container, Typography, Link, Divider } from '@mui/material';

// molecules
import { SearchField } from '@molecules/index';

// organisms
import { LaunchesPast } from '@organisms/index';

// templates
import { BaseLayout } from '@templates/index';

const Home: NextPage = () => (
  <BaseLayout title="Dashboard">
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>
        Welcome to{' '}
        <Link underline="hover" href="https://nextjs.org">
          Next.js!
        </Link>
      </Typography>

      <SearchField />
      <Divider sx={{ marginY: 4 }} />
      <LaunchesPast />
    </Container>
  </BaseLayout>
);

export default Home;
