/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from './header';
import { Theme } from './theme';
import './layout.css';
import '../icomoon/style.css';
import { Footer } from './footer';
import { Container } from '@chakra-ui/react';

type Prop = { children: React.ReactNode };

export const Layout: React.VFC<Prop> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Theme>
      <div className="application">
        <Header siteTitle={data.site?.siteMetadata?.title || ''} />
        <Container
          maxWidth="816px"
          paddingBottom="10"
          as="main"
          className="main"
        >
          {children}
        </Container>
        <Footer />
      </div>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
