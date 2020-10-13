import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Interweave from 'interweave';

import VotingButtons from 'src/components/VotingButtons';

import formatDate from 'src/utils/format-date';

import { USER_URL } from 'src/constants/urls';

import styles from 'src/components/CommentItem.module.css';

const CommentItem = ({ author, body, created, comments = [], hasDarkBg, score }) => {
  const [currentVote, setCurrentVote] = useState(0);
  const [points, setPoints] = useState();

  const [replies, setReplies] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [hasSubmittedReply, setHasSubmittedReply] = useState(false);
  const [reply, setReply] = useState('');

  const inputRef = useRef(null);

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

  const handleOpenReplyBox = () => {
    if (reply || isEditing) {
      return;
    }

    setIsEditing(true);
  };

  const handleReplyChange = (event) => {
    setReply(event.target.value || '');
  };

  const handleReplySave = () => {
    setReplies((replies) => {
      return [
        ...replies,
        {
          author: null,
          created: Date.now(),
          body: reply,
          id: Date.now() + '',
          score: 0,
        },
      ];
    });
    setIsEditing(false);
    setHasSubmittedReply(true);
  };

  const handleReplyCancel = () => {
    setReply('');
    setIsEditing(false);
  };

  useEffect(() => {
    setPoints(score);
  }, [score]);

  useEffect(() => {
    setReplies(comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={clsx(
        'flex',
        'w-full',
        'border',
        'border-gray-2',
        'p-4',
        !hasDarkBg && 'bg-white',
        hasDarkBg && 'bg-gray-1'
      )}
    >
      <div className="inline-block mr-4">
        <VotingButtons
          currentVote={currentVote}
          score={points}
          onUpVote={handleUpVote}
          onDownVote={handleDownVote}
        />
      </div>

      <div className="w-full">
        <div className="flex">
          {author ? (
            <a
              className="mr-2 font-bold hover:underline focus:underline"
              rel="nofollow noopener noreferrer"
              target="_blank"
              href={`${USER_URL}/${author}`}
            >
              {author}
            </a>
          ) : (
            <span className="mr-2 font-bold">You</span>
          )}

          <div className="mr-2 text-gray-5">
            {points} {points === 1 ? `point` : `points`}
          </div>

          <div className="mr-2 text-gray-5">
            <time dateTime={dateTimeValue}>{formattedDate}</time>
          </div>
        </div>

        <div className="my-2 text-2xl">
          <Interweave content={body} />
        </div>

        <button
          type="button"
          className="font-bold text-gray-5 hover:underline focus:underline lowercase"
          onClick={handleOpenReplyBox}
        >
          {Boolean(reply) && hasSubmittedReply ? `Replied` : `Reply`}
        </button>

        {isEditing && (
          <div>
            <textarea
              className={`my-4 p-1 border text-2xl ${styles.input}`}
              ref={inputRef}
              value={reply}
              onChange={handleReplyChange}
            />

            <div>
              <button
                className="mr-2 border border-gray-6 px-3 py-1 text-base bg-gray-1 hover:bg-gray-2 focus:bg-gray-2 rounded lowercase"
                type="button"
                onClick={handleReplySave}
              >
                Save
              </button>
              <button
                className="border border-gray-6 px-3 py-1 text-base bg-gray-1 hover:bg-gray-2 focus:bg-gray-2 rounded lowercase"
                type="button"
                onClick={handleReplyCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {replies?.length > 0 && (
          <ol className="mt-4">
            {replies.map((reply) => {
              return (
                <li key={reply.id} className="mt-4">
                  <CommentItem hasDarkBg={!hasDarkBg} {...reply} />
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  body: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,

  author: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  hasDarkBg: PropTypes.bool,
};

export default CommentItem;
