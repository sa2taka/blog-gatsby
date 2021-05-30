import { Flex } from '@chakra-ui/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { formatDate } from '../../util/formatTime';

import './index.css';

type Props = {
  category?: string;
  page?: number;
};
export const Posts: React.VFC<Props> = ({ category, page }) => {
  const data = useStaticQuery<GatsbyTypes.AllPostsQuery>(graphql`
    query AllPosts {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
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
      }
    }
  `);

  return (
    <ul>
      {data.allContentfulBlogPost.edges.map(edge => (
        <Post post={edge.node} key={edge.node.id} />
      ))}
    </ul>
  );
};

type PostProp = {
  post: GatsbyTypes.AllPostsQuery['allContentfulBlogPost']['edges'][number]['node'];
};

const Post: React.VFC<PostProp> = ({ post }) => {
  return (
    <Flex as="li" direction="column" marginTop="4">
      <Link
        to={`/category/${post.category!.slug!}`}
        style={{
          color: '#ff5722',
          display: 'inline',
          marginRight: 'auto',
        }}
        className="animation-link"
      >
        {post.category?.name}
      </Link>
      <Link
        to={`/post/${post.slug}`}
        style={{
          fontSize: '1.2em',
          marginRight: 'auto',
        }}
        className="animation-link"
      >
        {post.title}
      </Link>
      <time dateTime={post.createdAt} className="date-text">
        {formatDate(new Date(post.createdAt!))}
      </time>
    </Flex>
  );
};
