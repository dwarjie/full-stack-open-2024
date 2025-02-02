import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((err) => {
      throw `Error fetching all record. Please try again later.`;
    });
};

const create = (newData) => {
  const request = axios.post(baseUrl, newData);
  return request
    .then((response) => response.data)
    .catch((err) => {
      throw `Error creating record. Please try again later.`;
    });
};

const update = (id, newData) => {
  const request = axios.put(`${baseUrl}/${id}`, newData);
  return request
    .then((response) => response.data)
    .catch((err) => {
      throw `Information of ${newData.name} is already removed from the server.`;
    });
};

const deleteNumber = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then((response) => response.data)
    .catch((err) => {
      throw `Error deleting record. Please try again later.`;
    });
};

export default { getAll, create, update, deleteNumber };
