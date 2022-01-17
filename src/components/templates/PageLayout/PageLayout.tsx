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
import { PageLayoutProps } from './PageLayout.props';

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

const PageLayout: FC<PageLayoutProps> = ({ url, title, image, children, description }) => (
  <>
    <Head>
      <title>Pabau - {title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="title" content={`Pabau - ${title}`} />
      <meta name="description" content={description} />
      <meta name="keywords" content="rocket, missions, spacex" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Pabau thumbnail" />

      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image:alt" content="Pabau thumbnail" />
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

export default PageLayout;
