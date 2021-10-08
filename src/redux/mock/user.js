export const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(id => ({
  id,
  avatar:
    'https://gravatar.com/avatar/3aff1f2ef6d1398d4a3565204641a20d?s=400&d=robohash&r=x',
  name: `UserName${id}`,
  gender: id % 3,
  jobTitle: 'Developer',
}));
