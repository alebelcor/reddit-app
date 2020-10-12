import remark from 'remark';
import html from 'remark-html';

export default function processMarkdown(markdown) {
  return remark().use(html).processSync(markdown).toString();
}
