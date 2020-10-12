import extractPostData from 'src/utils/extract-post-data';

export default function getPostsFromJson(json) {
  return json.data.children.map((child) => {
    return extractPostData(child.data);
  });
}
