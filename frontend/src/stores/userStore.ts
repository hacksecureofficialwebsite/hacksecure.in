import { create } from "zustand";

interface UserState {
  user: {
    name: string;
    email: string;
    picture?: string;
    isAdmin: boolean;
    userId: string;
  } | null;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
