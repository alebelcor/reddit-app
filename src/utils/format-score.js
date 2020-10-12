export default function formatScore(score = 0) {
  if (score === 0) {
    return '•';
  }

  const string = score.toString();

  if (string.length === 6) {
    return `${string.substr(0, 3)}k`;
  } else if (string.length === 5) {
    return `${string.substr(0, 2)}.${string.substr(2, 1)}k`;
  }

  return string;
}
