import PropTypes from 'prop-types';
import clsx from 'clsx';

import UpVoteIcon from 'src/svgs/upvote-icon.svg';
import DownVoteIcon from 'src/svgs/downvote-icon.svg';

import formatScore from 'src/utils/format-score';

import styles from 'src/components/VotingButtons.module.css';

const VotingButtons = ({ currentVote, onDownVote, onUpVote, score, showPoints = false, title }) => {
  const formattedPoints = formatScore(score);

  return (
    <div className={clsx('flex', 'flex-col', showPoints && styles.score)}>
      <button className={clsx(!showPoints && 'mb-1')} type="button" onClick={onUpVote}>
        <UpVoteIcon className="inline" fill={currentVote === 1 ? `#ff8b60` : `#c6c6c6`} />
        <span className="sr-only">Upvote{title ? ` post with title ${title}` : null}</span>
      </button>

      {showPoints ? (
        <span
          className={clsx(
            'font-bold',
            'text-lg',
            'text-center',
            currentVote === 0 && 'text-gray-4',
            currentVote === 1 && 'text-orange',
            currentVote === -1 && 'text-purple-1'
          )}
        >
          {formattedPoints}
        </span>
      ) : null}

      <button type="button" onClick={onDownVote}>
        <DownVoteIcon className="inline" fill={currentVote === -1 ? `#9494ff` : `#c6c6c6`} />
        <span className="sr-only">Downvote{title ? ` post with title ${title}` : null}</span>
      </button>
    </div>
  );
};

VotingButtons.propTypes = {
  currentVote: PropTypes.oneOf([0, 1, -1]).isRequired,
  onDownVote: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,

  score: PropTypes.number,
  showPoints: PropTypes.bool,
  title: PropTypes.string,
};

export default VotingButtons;
