export const deleteById = (state, id, matchedKey) => {
  const index = state.rows.findIndex(row => row.id === id);
  if (index === -1) return;
  state.rows.splice(index, 1);
  state.total--;
  return;
};
