const truncate = (str) => {
  if (str.length < 18) return str;
  else return `${str.slice(0, 18)}...`;
};

export default truncate;
