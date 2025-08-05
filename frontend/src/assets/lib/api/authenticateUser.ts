import axiosInstance from "../../../utils/axiosInstance";

interface AuthPayload {
  email: string;
  password: string;
  name: string;
  mode: "signup" | "signin";
}

const authenticateUser = async (payload: AuthPayload) => {
  const mode = payload.mode;
  const response = await axiosInstance.post(`/auth/${mode}`, payload);
  return response.data;
};

export default authenticateUser;
