import { Container } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { PostBody } from '../../components/post/postBody';
import { formatDate } from '../../util/formatTime';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Layout } from '../../components/layout/layout';
import { Seo } from '../../components/layout/seo';

import './post.css';
import '../../components/layout/animationLink.css';

interface Props {
  data: GatsbyTypes.PostBySlugQuery;
}

const Post: React.VFC<Props> = ({ data }) => {
  const post = data.contentfulBlogPost;
  if (!post) {
    return null;
  }

  return (
    <Layout>
      <Seo title={post.title!} />
      <Box marginX="auto" marginTop="12px" as="article" className="post-width">
        <Box marginBottom="2em">
          <Link
            to={`/category/${post.category!.slug!}`}
            style={{
              color: '#ff5722',
            }}
            className="category-name animation-link "
          >
            {post.category?.name}
          </Link>
          <h1 className="post-title-name">{post.title}</h1>
          <Flex direction="column" marginTop="0.6em">
            <span className="date-text">
              作成日：
              <time dateTime={post.createdAt}>
                {formatDate(new Date(post.createdAt!))}
              </time>
            </span>
            <span className="date-text">
              更新日：
              <time dateTime={post.updatedAt}>
                {formatDate(new Date(post.updatedAt!))}
              </time>
            </span>
          </Flex>
        </Box>
        <PostBody markdown={post.body?.body!} />
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      createdAt
      latex
      author {
        name
      }
      postImage {
        title
        file {
          fileName
          url
        }
      }
      body {
        body
      }
      description
      updatedAt
      tags
      public
      category {
        name
        slug
      }
    }
  }
`;

export default Post;
