const Fetching = ({ hidden }) => {
  if (hidden) return null;
  return <div>Fetching ...</div>;
};

Fetching.defaultProps = {
  hidden: true,
};
export default Fetching;
