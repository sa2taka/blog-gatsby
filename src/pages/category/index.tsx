import React from 'react';

import { Layout } from '../../components/layout/layout';
import { Seo } from '../../components/layout/seo';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Center, Flex } from '@chakra-ui/react';

import './index.css';

interface Props {}

interface CategoryProps {
  category: GatsbyTypes.AllCategoriesQuery['allContentfulCategory']['edges'][number]['node'];
}

const Category: React.VFC<CategoryProps> = ({ category }) => {
  return (
    <li className="category-list-item">
      <Link to={`/category/${category.slug}`}>
        {`${category.name} (${category.blog_post.length})`}
      </Link>
    </li>
  );
};

const Categories: React.VFC<Props> = () => {
  const data = useStaticQuery<GatsbyTypes.AllCategoriesQuery>(graphql`
    query AllCategories {
      allContentfulCategory(sort: { fields: sort }) {
        edges {
          node {
            id
            name
            slug
            blog_post {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="カテゴリ"></Seo>
      <Center as="h1" fontSize="1.6em">
        カテゴリ
      </Center>
      <nav>
        <Flex as="ul" wrap="wrap" justifyContent="start">
          {data.allContentfulCategory.edges
            .filter(data => data.node.blog_post)
            .map(data => (
              <Category category={data.node} key={data.node.id} />
            ))}
        </Flex>
      </nav>
    </Layout>
  );
};

export default Categories;
