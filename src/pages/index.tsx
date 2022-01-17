// next
import type { NextPage } from 'next';

// mui
import { Container, Typography, Link } from '@mui/material';

// templates
import { BaseLayout } from '@templates/index';

const Home: NextPage = () => (
  <BaseLayout title="Dashboard">
    <Container maxWidth="lg">
      <Typography variant="h4" align="center">
        Welcome to{' '}
        <Link underline="hover" href="https://nextjs.org">
          Next.js!
        </Link>
      </Typography>
    </Container>
  </BaseLayout>
);

export default Home;
