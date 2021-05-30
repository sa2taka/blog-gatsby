import React from 'react';

import { Layout } from '../../components/layout/layout';
import { Seo } from '../../components/layout/seo';
import { useStaticQuery, graphql, Link } from 'gatsby';

interface Props {}

interface CategoryProps {
  category: GatsbyTypes.AllCategoriesQuery['allContentfulCategory']['edges'][number]['node'];
}

const Category: React.VFC<CategoryProps> = ({ category }) => {
  console.log(category);
  return (
    <li>
      <Link to={`/category/${category.slug}`}>
        {category.name} ({category.blog_post.length})
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

  console.log(data);

  return (
    <Layout>
      <Seo title="カテゴリ"></Seo>
      <ul>
        {data.allContentfulCategory.edges
          .filter(data => data.node.blog_post)
          .map(data => (
            <Category category={data.node} key={data.node.id} />
          ))}
      </ul>
    </Layout>
  );
};

export default Categories;
