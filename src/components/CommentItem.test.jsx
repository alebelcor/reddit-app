import { render, fireEvent } from '@testing-library/react';

import CommentItem from 'src/components/CommentItem';

it('should display a default background', () => {
  let { getByTestId } = render(
    <CommentItem author="my_user" body="My comment" created={157765000000} score={0} />
  );

  let element;

  element = getByTestId('CommentItem');
  expect(element).toBeVisible();
  expect(element).toHaveAttribute('class', expect.stringContaining('bg-white'));
});

it('should display a darker background', () => {
  const { getByTestId } = render(
    <CommentItem author="my_user" body="My comment" created={157765000000} score={0} hasDarkBg />
  );

  const element = getByTestId('CommentItem');
  expect(element).toBeVisible();
  expect(element).toHaveAttribute('class', expect.stringContaining('bg-gray-1'));
});

it('should display the author link', () => {
  const { getByText } = render(
    <CommentItem author="my_user" body="My comment" created={157765000000} score={0} />
  );

  const author = getByText('my_user');
  expect(author).toBeVisible();
  expect(author).toHaveAttribute('href', 'https://www.reddit.com/user/my_user');
});

it('should display the (local) author', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={0} />);

  const author = getByText('You');
  expect(author).toBeVisible();
  expect(author).not.toHaveAttribute('href');
});

it('should display the points amount when less than -1 point', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={-2} />);
  expect(getByText('-2 points')).toBeVisible();
});

it('should display the points amount when -1 point', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={-1} />);
  expect(getByText('-1 point')).toBeVisible();
});

it('should display the points amount when 0 points', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={0} />);
  expect(getByText('0 points')).toBeVisible();
});

it('should display the points amount when 1 point', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={1} />);
  expect(getByText('1 point')).toBeVisible();
});

it('should display the points amount when more than 1 point', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={2} />);
  expect(getByText('2 points')).toBeVisible();
});

it('should display the relative date of posting', () => {
  const { getByText } = render(
    <CommentItem body="My comment" created={new Date().getTime() - 60 * 1000} score={0} />
  );
  expect(getByText('a minute ago')).toBeVisible();
});

it('should display the comment', () => {
  const { getByText } = render(<CommentItem body="My comment" created={157765000000} score={0} />);
  expect(getByText('My comment')).toBeVisible();
});

describe('when voting', () => {
  it('should update the arrow color when upvoting', () => {
    const { getByText, getByTestId } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    expect(getByTestId('UpVoteIcon')).toHaveAttribute('fill', '#c6c6c6');

    fireEvent.click(getByText('Upvote'));

    expect(getByTestId('UpVoteIcon')).toHaveAttribute('fill', '#ff8b60');
  });

  it('should update the comment score when upvoting', () => {
    const { getByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Upvote'));

    expect(getByText('1 point')).toBeVisible();
  });

  it('should restore the arrow color score when cancelling an upvote', () => {
    const { getByText, getByTestId } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    expect(getByTestId('UpVoteIcon')).toHaveAttribute('fill', '#c6c6c6');

    fireEvent.click(getByText('Upvote'));
    fireEvent.click(getByText('Upvote'));

    expect(getByTestId('UpVoteIcon')).toHaveAttribute('fill', '#c6c6c6');
  });

  it('should restore the comment score when cancelling an upvote', () => {
    const { getByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Upvote'));
    fireEvent.click(getByText('Upvote'));

    expect(getByText('0 points')).toBeVisible();
  });

  it('should update the arrow color when downvoting', () => {
    const { getByText, getByTestId } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    expect(getByTestId('DownVoteIcon')).toHaveAttribute('fill', '#c6c6c6');

    fireEvent.click(getByText('Downvote'));

    expect(getByTestId('DownVoteIcon')).toHaveAttribute('fill', '#9494ff');
  });

  it('should update the comment score when downvoting', () => {
    const { getByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Downvote'));

    expect(getByText('-1 point')).toBeVisible();
  });

  it('should restore the arrow color score when cancelling an downvoting', () => {
    const { getByText, getByTestId } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    expect(getByTestId('DownVoteIcon')).toHaveAttribute('fill', '#c6c6c6');

    fireEvent.click(getByText('Downvote'));
    fireEvent.click(getByText('Downvote'));

    expect(getByTestId('DownVoteIcon')).toHaveAttribute('fill', '#c6c6c6');
  });

  it('should restore the comment score when cancelling an downvoting', () => {
    const { getByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Downvote'));
    fireEvent.click(getByText('Downvote'));

    expect(getByText('0 points')).toBeVisible();
  });
});

describe('when replying', () => {
  it('should display a reply button and move focus to it', () => {
    const { getByText, getByTestId } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Reply'));

    const replyBox = getByTestId('reply-box');

    expect(replyBox).toBeVisible();
    expect(replyBox).toHaveFocus();
  });

  it('should re-focus on the reply box when re-clicking on the reply button', () => {
    const { getByText, getByTestId } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Reply'));
    fireEvent.click(getByText('Reply'));

    expect(getByTestId('reply-box')).toHaveFocus();
  });

  it('should re-focus on the reply button when cancelling the reply', () => {
    const { getByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Reply'));
    fireEvent.click(getByText('Cancel'));

    expect(getByText('Reply')).toHaveFocus();
  });

  it('should display a validation error message when submitting an empty message', () => {
    const { getByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Reply'));
    fireEvent.click(getByText('Save'));

    expect(getByText('We need something here')).toBeVisible();
  });

  it('should hide the validation error message when entering a non-empty message', () => {
    const { getByText, getByTestId, queryByText } = render(
      <CommentItem body="My comment" created={157765000000} score={0} />
    );

    fireEvent.click(getByText('Reply'));
    fireEvent.click(getByText('Save'));
    fireEvent.change(getByTestId('reply-box'), {
      target: {
        value: 'New comment',
      },
    });

    expect(queryByText('We need something here')).not.toBeInTheDocument();
  });

  describe('when successfully replying', () => {
    it('should hide the reply box', () => {
      const { getByText, getByTestId, queryByTestId } = render(
        <CommentItem body="My comment" created={157765000000} score={0} />
      );

      fireEvent.click(getByText('Reply'));
      fireEvent.change(getByTestId('reply-box'), {
        target: {
          value: 'New comment',
        },
      });
      fireEvent.click(getByText('Save'));

      expect(queryByTestId('reply-box')).not.toBeInTheDocument();
    });

    it('should update the label of the reply button to `Replied`', () => {
      const { getByText, getByTestId } = render(
        <CommentItem body="My comment" created={157765000000} score={0} />
      );

      fireEvent.click(getByText('Reply'));
      fireEvent.change(getByTestId('reply-box'), {
        target: {
          value: 'New comment',
        },
      });
      fireEvent.click(getByText('Save'));

      expect(getByText('Replied')).toBeVisible();
    });

    it('should render a new reply', () => {
      const { getByText, getByTestId } = render(
        <CommentItem body="My comment" created={157765000000} score={0} />
      );

      fireEvent.click(getByText('Reply'));
      fireEvent.change(getByTestId('reply-box'), {
        target: {
          value: 'New comment',
        },
      });
      fireEvent.click(getByText('Save'));

      expect(getByText('New comment')).toBeVisible();
    });

    it('should do nothing when re-clicking the reply button when the reply was already submitted successfully', () => {
      const { getByText, getByTestId, queryByTestId } = render(
        <CommentItem body="My comment" created={157765000000} score={0} />
      );

      fireEvent.click(getByText('Reply'));
      fireEvent.change(getByTestId('reply-box'), {
        target: {
          value: 'New comment',
        },
      });
      fireEvent.click(getByText('Save'));
      fireEvent.click(getByText('Replied'));

      expect(queryByTestId('reply-box')).not.toBeInTheDocument();
    });
  });
});
