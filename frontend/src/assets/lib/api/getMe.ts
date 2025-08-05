import axiosInstance from "../../../utils/axiosInstance";

const authenticateUser = async () => {
  const response = await axiosInstance.get(`/auth/me`);
  return response.data;
};

export default authenticateUser;
