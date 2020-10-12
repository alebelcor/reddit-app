import PropTypes from 'prop-types';
import Head from 'next/head';

import PostItem from 'src/components/PostItem';

import preparePosts from 'src/utils/prepare-posts';

import { INDEX_API_ENDPOINT_URL } from 'src/constants/urls';

export async function getStaticProps() {
  const response = await fetch(INDEX_API_ENDPOINT_URL);
  const json = await response.json();
  const posts = preparePosts(json);

  return {
    props: {
      posts,
    },
    revalidate: 2,
  };
}

const IndexPage = ({ posts }) => {
  return (
    <div className="pl-4">
      <Head>
        <title>all subreddits</title>
      </Head>

      <div className="border-l border-gray-3 py-4">
        <ol className="pl-2">
          {posts.map((post, index) => {
            return (
              <li key={post.id}>
                <PostItem rank={index + 1} {...post} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostItem.propTypes)).isRequired,
};

export default IndexPage;
