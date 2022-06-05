import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const method = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default method;
