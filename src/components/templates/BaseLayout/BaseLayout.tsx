// react
import { FC } from 'react';

// next
import dynamic from 'next/dynamic';
import Head from 'next/head';

// emotion
import styled from '@emotion/styled';

// mui
import { Box } from '@mui/material';

// interface
import { BaseLayoutProps } from './BaseLayout.props';

// lazy components
const Navbar = dynamic(() => import('@organisms/navbar/Navbar'));
const Footer = dynamic(() => import('@organisms/footer/Footer'));

const BoxStyled = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
});

const BaseLayout: FC<BaseLayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>Pabau - {title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <BoxStyled>
      <Box sx={{ width: '100%' }}>
        <Navbar />
        <main role="main">{children}</main>
      </Box>

      <Footer />
    </BoxStyled>
  </>
);

export default BaseLayout;
