export const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(id => ({
  id,
  name: `UserName${id}`,
  gender: id % 2,
}));
