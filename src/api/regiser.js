import http from "./http";
const apiEndPoint = `/register`;

export async function register(information) {
  const { username, firstName, lastName, password, recovery } = information;
  const info = {
    username,
    firstName,
    lastName,
    password,
    recovery,
  };
  const { data } = await http.post(apiEndPoint, info);
  return data;
}

const service = { register };

export default service;
