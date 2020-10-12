import extractPostData from 'src/utils/extract-post-data';
import extractPostCommentsData from 'src/utils/extract-post-comments-data';

export default function preparePost(json) {
  const jsonPost = json[0].data.children[0].data;
  const jsonComments = json[1].data.children.map((child) => {
    return child.data;
  });

  const post = extractPostData(jsonPost);
  const comments = extractPostCommentsData(jsonComments);

  return {
    post,
    comments,
  };
}
