const API_ROOT = `${process.env.REACT_APP_API}`;
const ApiURL = slug => {
  return API_ROOT + slug;
};

export default ApiURL;
