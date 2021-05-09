import React from 'react';
import { Link } from 'gatsby';
import { Spacer } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import './footer.css';
import './animationLink.css';

export const Footer: React.VFC = () => {
  return (
    <>
      <footer className="main-footer">
        <Flex
          justify="center"
          className="d-flex flex-column align-center mx-auto"
        >
          <Link
            className="d-flex icon-line  footer-link align-center animation-link"
            to="/"
          >
            <i className="icon icon-home" style={{ fontSize: '1.5em' }}></i>
            <span style={{ marginLeft: '4px' }}>Home</span>
          </Link>
        </Flex>
        <Flex justify="center" wrap="wrap" marginTop="1.5em">
          <a
            href="https://twitter.com/t0p_l1ght"
            className="footer-link icon-line  mb-2 animation-link"
          >
            <i
              className="icon icon-twitter"
              style={{ color: '#1DA1F2', fontSize: '1.5em' }}
            ></i>
            <span style={{ marginLeft: '4px' }}>筆者Twitterアカウント</span>
          </a>

          <Link
            to="/guide"
            className="animation-link footer-link 2"
            style={{
              margin: '0 0.5em',
            }}
          >
            当サイト利用について
          </Link>
        </Flex>
      </footer>

      <footer className="copyright-footer">
        <Flex>
          <Spacer />
          <span>&copy; sa2taka</span>
        </Flex>
      </footer>
    </>
  );
};
