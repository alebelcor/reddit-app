import processMarkdown from 'src/utils/process-markdown';

function getAuthor(post) {
  return post.author;
}

function getBody(post) {
  return processMarkdown(post.body);
}

function getCreated(post) {
  return post.created_utc * 1000;
}

function getId(post) {
  return post.id;
}

function getScore(post) {
  return post.score;
}

export default function extractPostCommentsData(comments) {
  comments.pop();

  return comments.map((comment) => {
    const author = getAuthor(comment);
    const body = getBody(comment);
    const comments = extractPostCommentsData(
      comment?.replies?.data?.children.map((child) => {
        return child.data;
      }) ?? []
    );
    const created = getCreated(comment);
    const id = getId(comment);
    const score = getScore(comment);

    return {
      author,
      body,
      comments,
      created,
      id,
      score,
    };
  });
}
