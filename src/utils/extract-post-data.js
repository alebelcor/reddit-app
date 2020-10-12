import { THUMBNAILS_PATH } from 'src/constants/paths';

function getAuthor(post) {
  return post.author;
}

function getCommentCount(post) {
  return post.num_comments;
}

function getCreated(post) {
  return post.created_utc * 1000;
}

function getHostname(post) {
  return post.domain;
}

function getId(post) {
  return post.id;
}

function getIsSelf(post) {
  return post.is_self;
}

function getPermalink(post) {
  return post.permalink;
}

function getScore(post) {
  return post.score;
}

function getSubreddit(post) {
  return post.subreddit_name_prefixed;
}

function getTitle(post) {
  return post.title;
}

function getThumbnailUrl(post) {
  if (post.is_self) {
    return `${THUMBNAILS_PATH}/self.png`;
  }

  try {
    new URL(post.thumbnail);
    return post.thumbnail;
  } catch {
    return `${THUMBNAILS_PATH}/link.png`;
  }
}

function getUrl(post) {
  if (post.is_self) {
    return getPermalink(post);
  }

  return post.url;
}

export default function getPostData(json) {
  const author = getAuthor(json);
  const commentCount = getCommentCount(json);
  const created = getCreated(json);
  const hostname = getHostname(json);
  const id = getId(json);
  const isSelf = getIsSelf(json);
  const permalink = getPermalink(json);
  const score = getScore(json);
  const subreddit = getSubreddit(json);
  const title = getTitle(json);
  const thumbnailUrl = getThumbnailUrl(json);
  const url = getUrl(json);

  return {
    author,
    created,
    hostname,
    id,
    permalink,
    subreddit,
    title,
    thumbnailUrl,
    url,
    score,
    isSelf,
    commentCount,
  };
}
