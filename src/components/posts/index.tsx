import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { formatDate } from '../../util/formatTime';

type Props = {
  category?: string;
  page?: number;
};
export const Posts: React.VFC<Props> = ({ category, page }) => {
  const data = useStaticQuery<GatsbyTypes.AllPostsQuery>(graphql`
    query AllPosts {
      allContentfulBlogPost {
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
    <Flex as="li" direction="column">
      <div>{post.category?.name}</div>
      <div>{post.title}</div>
      <time dateTime={post.createdAt}>
        {formatDate(new Date(post.createdAt!))}
      </time>
    </Flex>
  );
};
