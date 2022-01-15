// next
import type { NextPage } from 'next';
import Head from 'next/head';

// mui
import { Container, Box, Typography, Link } from '@mui/material';

const Home: NextPage = () => (
  <Container maxWidth="md">
    <Head>
      <title>Create Next App</title>
    </Head>

    <Box
      component="main"
      sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography variant="h4" align="center">
        Welcome to{' '}
        <Link underline="hover" href="https://nextjs.org">
          Next.js!
        </Link>
      </Typography>
    </Box>
  </Container>
);

export default Home;
