// react
import { FC } from 'react';

// next
import Link from 'next/link';

// mui
import { Link as MuiLink } from '@mui/material';

// types
import { CustomLinkProps } from './CustomLink.props';

const CustomLink: FC<CustomLinkProps> = ({
  href,
  color = 'white',
  underline = 'none',
  ...rest
}) => (
  <Link passHref href={href}>
    <MuiLink color={color} underline={underline} {...rest} />
  </Link>
);

export default CustomLink;
