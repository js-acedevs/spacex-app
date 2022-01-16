// next
import type { NextPage } from 'next';
import Head from 'next/head';

// emotion
import styled from '@emotion/styled';

// mui
import { Container, Box, Typography, Link } from '@mui/material';

const BoxStyled = styled(Box)({
  color: 'hotpink',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Home: NextPage = () => (
  <Container maxWidth="md">
    <Head>
      <title>Create Next App</title>
    </Head>

    <BoxStyled component="main">
      <Typography variant="h4" align="center">
        Welcome to{' '}
        <Link underline="hover" href="https://nextjs.org">
          Next.js!
        </Link>
      </Typography>
    </BoxStyled>
  </Container>
);

export default Home;
