export const presentVoteScore = (value) => {
  return `${value} ${value === 1 ? 'point' : 'points'}`;
}