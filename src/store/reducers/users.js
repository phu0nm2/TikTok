import { apiUsers } from "../../api/apiTikTok";

export const fetchSearch = async (q, type = "less") => {
  try {
    const { data } = await apiUsers.getUsers({
      params: {
        q,
        type,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
