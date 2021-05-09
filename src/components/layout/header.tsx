import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './header.css';
import { Flex, Spacer } from '@chakra-ui/layout';
import { DarkThemeSwitch } from './dartThemeSwtich';

type Prop = { siteTitle: string };

export const Header: React.VFC<Prop> = ({ siteTitle }) => (
  <Flex as="header" alignItems="center" height="100%" className="blog-header">
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Flex width="100%">
        <StaticImage
          src="../../images/icon.png"
          alt="sa2takaブログロゴ"
          height={36}
          style={{
            marginLeft: '4%',
            marginRight: '12px',
          }}
          formats={['auto', 'webp', 'avif']}
        />{' '}
        <h1
          className="navbar-blog-title"
          style={{
            fontWeight: 600,
          }}
        >
          {siteTitle}
        </h1>
      </Flex>
    </Link>
    <Spacer />
    <DarkThemeSwitch />
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};
