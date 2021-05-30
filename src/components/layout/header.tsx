import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Flex, Spacer } from '@chakra-ui/layout';
import { DarkThemeSwitch } from './dartThemeSwtich';

import './header.css';
import './animationLink.css';

type Prop = { siteTitle: string };

export const Header: React.VFC<Prop> = ({ siteTitle }) => (
  <Flex
    as="header"
    alignItems="center"
    height="100%"
    className="blog-header"
    paddingTop="2"
    paddingBottom="4"
  >
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
    <nav
      style={{
        margin: 'auto 0.5em',
      }}
    >
      <Link
        to="/"
        className="animation-link"
        style={{
          margin: 'auto 0.5em',
        }}
      >
        Home
      </Link>
      <Link
        to="/category"
        className="animation-link"
        style={{
          margin: 'auto 0.5em',
        }}
      >
        Category
      </Link>
    </nav>

    <DarkThemeSwitch />
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};
