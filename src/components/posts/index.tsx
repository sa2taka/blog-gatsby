import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { BlogPostQuery } from '../../generated/graphql';

type Props = {
  category?: string;
  page?: number;
};
export const Posts: React.VFC<Props> = ({ category, page }) => {
  const data = useStaticQuery<BlogPostQuery>(graphql`
    query BlogPost {
      allContentfulBlogPost(
        skip: 0
        limit: 1000
        sort: { order: DESC, fields: createdAt }
      ) {
        edges {
          node {
            id
            public
            slug
            tags
            title
            updatedAt
            description
            createdAt
            category {
              id
              sort
              slug
              name
            }
            author {
              id
              name
              icon {
                title
                file {
                  url
                  fileName
                }
                createdAt
                contentful_id
              }
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
  post: BlogPostQuery['allContentfulBlogPost']['edges'][number]['node'];
};

const Post: React.VFC<PostProp> = ({ post }) => {
  const formatDate = (date: Date) => {
    const fillBy0 = (num: number, length: number) => {
      return ('0000' + num.toString()).slice(-length);
    };
    const year = date.getFullYear();
    const month = fillBy0(date.getMonth() + 1, 2);
    const day = fillBy0(date.getDate(), 2);
    const week = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return `${year}/${month}/${day}(${week})`;
  };

  return (
    <Flex as="li" direction="column">
      <div>{post.category?.name}</div>
      <div>{post.title}</div>
      <time dateTime={post.createdAt}>
        {formatDate(new Date(post.createdAt))}
      </time>
    </Flex>
  );
};
