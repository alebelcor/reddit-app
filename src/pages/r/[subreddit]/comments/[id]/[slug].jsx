import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ContentLoader from 'react-content-loader';

import PostItem from 'src/components/PostItem';
import CommentItem from 'src/components/CommentItem';

import preparePost from 'src/utils/prepare-post';

import { SUBREDDIT_URL } from 'src/constants/urls';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { subreddit, id, slug } = params;

  const response = await fetch(`${SUBREDDIT_URL}/${subreddit}/comments/${id}/${slug}/.json`);
  const json = await response.json();
  const { comments, post } = preparePost(json);

  return {
    props: {
      comments,
      post,
    },
    revalidate: 2,
  };
}

const PostPage = ({ comments, post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <ContentLoader
        className="py-4 w-full h-screen"
        speed={1}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="15" y="15" rx="0" ry="0" width="70" height="70" />
        <rect x="90" y="15" rx="0" ry="0" width="100%" height="70" />
        <rect x="15" y="118" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="174" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="230" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="286" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="342" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="398" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="454" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="510" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="566" rx="0" ry="0" width="100%" height="50" />
        <rect x="15" y="622" rx="0" ry="0" width="100%" height="50" />
      </ContentLoader>
    );
  }

  const { title: postTitle, subreddit: postSubreddit } = post;

  const subredditName = postSubreddit.substring(2);

  return (
    <div className="pl-4">
      <Head>
        <title>
          {postTitle} : {subredditName}
        </title>
      </Head>

      <div className="pt-6 pb-4">
        <PostItem {...post} />
      </div>

      {comments?.length > 0 && (
        <ol>
          {comments.map((comment) => {
            return (
              <li key={comment.id} className="mb-4">
                <CommentItem {...comment} />
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

PostPage.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentItem.propTypes)),
  post: PropTypes.shape(PostItem.propTypes),
};

export default PostPage;
