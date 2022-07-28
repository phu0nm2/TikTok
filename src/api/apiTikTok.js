import axiosClient from "./axiosClient";

// export const apiUsers = async (path, params = {}) => {
//   const res = await axiosClient.get(path, params);
//   return res.data;
// };

export const apiUsers = {
  getUsers: async (params = {}) => {
    const url = "users/search";
    const { data } = await axiosClient.get(url, params);
    return data;
  },
};
