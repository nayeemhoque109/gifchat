import axios from "axios";

const API_BASE_URL = "https://www.doc.gold.ac.uk/usr/216";

const createUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/user`, userData);
};

const searchUser = async (email) => {
  return await axios.get(`${API_BASE_URL}/search-user?email=${email}`);
};

const createChannel = async (requestData) => {
  return await axios.post(`${API_BASE_URL}/channel`, requestData);
};

const getChannelList = async (email) => {
  return await axios.get(`${API_BASE_URL}/channel-list?email=${email}`);
};

const sendMessage = async (requestData) => {
  return await axios.post(`${API_BASE_URL}/message`, requestData);
};

export const httpManager = {
  createUser,
  searchUser,
  createChannel,
  getChannelList,
  sendMessage,
};
export default httpManager;