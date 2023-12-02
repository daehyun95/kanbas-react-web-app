import axios from "axios";

const API_BASE = "https://kanbas-node-server-app-cwch.onrender.com";
const USERS_API = `${API_BASE}/api/users`;


const request = axios.create({
    withCredentials: true,
});

export const users = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
  };

export const findAllUsers = async() => {
    const response = await request.get(USERS_API);
    return response.data;
};

export const findUsersByRole = async (role) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findUserById = async(id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };

export const deleteUser = async(user)=> {
    const response = await request.delete(`${USERS_API}/${user._id}`);
    return response.data;
};

export const signIn = async(credentials) => {
    const response = await request.post(`${USERS_API}/signin`, credentials);
    return response.data;
}

export const signOut = async() => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
}

export const signup = async (credentials) => {
    const response = await axios.post(`${USERS_API}/signup`, credentials);
    return response.data;
  }

export const account = async() => {
    const response = await request.post(`${USERS_API}/account`);
    return response.data;
}

export const createUser = async (user) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
  };
