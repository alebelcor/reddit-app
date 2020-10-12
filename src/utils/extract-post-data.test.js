import extractPostData from 'src/utils/extract-post-data';

const base = {
  author: 'john',
  num_comments: 1234,
  created_utc: 1602465100,
  domain: 'i.reddit.com',
  id: '02b549',
  permalink: '/r/subreddit/comments/02b549/some_title',
  score: 100,
  subreddit_name_prefixed: 'subreddit',
  title: 'Some Title',
};

it('should extract post data', () => {
  expect(
    extractPostData({
      ...base,
      is_self: true,
    })
  ).toStrictEqual({
    author: 'john',
    commentCount: 1234,
    created: 1602465100000,
    hostname: 'i.reddit.com',
    id: '02b549',
    isSelf: true,
    permalink: '/r/subreddit/comments/02b549/some_title',
    score: 100,
    subreddit: 'subreddit',
    thumbnailUrl: '/images/thumbnails/self.png',
    title: 'Some Title',
    url: '/r/subreddit/comments/02b549/some_title',
  });
});

it('should extract post data1', () => {
  expect(
    extractPostData({
      ...base,
      is_self: false,
      thumbnailUrl: 'https://placehold.it/100x100',
      url: 'https://www.google.com',
    })
  ).toStrictEqual({
    author: 'john',
    commentCount: 1234,
    created: 1602465100000,
    hostname: 'i.reddit.com',
    id: '02b549',
    isSelf: false,
    permalink: '/r/subreddit/comments/02b549/some_title',
    score: 100,
    subreddit: 'subreddit',
    thumbnailUrl: '/images/thumbnails/link.png',
    title: 'Some Title',
    url: 'https://www.google.com',
  });
});
