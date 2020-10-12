import relativeDate from 'relative-date';

export default function formatDate(timestamp) {
  return relativeDate(timestamp);
}
