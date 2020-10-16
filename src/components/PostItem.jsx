import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import VotingButtons from 'src/components/VotingButtons';

import formatDate from 'src/utils/format-date';

import { DOMAIN_URL, USER_URL, SUBREDDIT_URL } from 'src/constants/urls';

import styles from 'src/components/PostItem.module.css';

const PostItem = ({
  author,
  commentCount,
  created,
  hostname,
  isSelf,
  permalink,
  score,
  subreddit,
  thumbnailUrl,
  title,
  url,
  rank,
}) => {
  const [currentVote, setCurrentVote] = useState(0);
  const [points, setPoints] = useState();

  const formattedDate = formatDate(created);
  const dateTimeValue = new Date(created).toISOString();

  const handleVote = (vote) => {
    if (vote === currentVote) {
      setCurrentVote(0);
      setPoints(points - vote);
      return;
    }

    setCurrentVote(vote);
    setPoints(score + vote);
  };

  const handleUpVote = () => {
    handleVote(1);
  };

  const handleDownVote = () => {
    handleVote(-1);
  };

  useEffect(() => {
    setPoints(score);
  }, [score]);

  return (
    <div className="flex py-1">
      {rank ? (
        <div className={styles.rankContainer}>
          <span className={`block font-medium text-3xl text-gray-4 text-right ${styles.rank}`}>
            {rank}
          </span>
        </div>
      ) : null}

      <div className="mx-3">
        <VotingButtons
          showPoints
          currentVote={currentVote}
          score={points}
          title={title}
          onUpVote={handleUpVote}
          onDownVote={handleDownVote}
        />
      </div>

      <div className="mr-2 mb-1">
        {isSelf ? (
          <Link href={url}>
            <a className={`inline-block ${styles.thumbnail}`}>
              <img
                className={`mx-auto ${styles.thumbnailImage}`}
                src={thumbnailUrl}
                alt=""
                loading="lazy"
              />
              <span className="sr-only">Open post with title: {title}</span>
            </a>
          </Link>
        ) : (
          <a
            className={`inline-block ${styles.thumbnail}`}
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={url}
          >
            <img
              className={`mx-auto ${styles.thumbnailImage}`}
              src={thumbnailUrl}
              alt=""
              loading="lazy"
            />
            <span className="sr-only">Open post with title: {title}</span>
          </a>
        )}
      </div>

      <div>
        <div>
          {isSelf ? (
            <Link href={url}>
              <a className="text-3xl text-blue-1 mr-4">{title}</a>
            </Link>
          ) : (
            <a
              className="text-3xl text-blue-1 mr-4"
              rel="nofollow noopener noreferrer"
              target="_blank"
              href={url}
            >
              {title}
            </a>
          )}

          <a
            className="text-gray-5 hover:underline focus:underline"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={`${DOMAIN_URL}/${hostname}/`}
          >
            ({hostname})
          </a>
        </div>

        <div className="text-gray-5">
          Submitted <time dateTime={dateTimeValue}>{formattedDate}</time> by{' '}
          <a
            className="hover:underline focus:underline"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={`${USER_URL}/${author}`}
          >
            {author}
          </a>{' '}
          to{' '}
          <a
            className="hover:underline focus:underline"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={`${SUBREDDIT_URL}/${subreddit}`}
          >
            {subreddit}
          </a>
        </div>

        <div className="font-bold">
          <Link href={permalink}>
            <a className="text-gray-5 hover:underline focus:underline">
              {commentCount} {commentCount === 1 ? `comment` : `comments`}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  created: PropTypes.number.isRequired,
  hostname: PropTypes.string,
  isSelf: PropTypes.bool.isRequired,
  permalink: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  subreddit: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rank: PropTypes.number,
};

export default PostItem;
