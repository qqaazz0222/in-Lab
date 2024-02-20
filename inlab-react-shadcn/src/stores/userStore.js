import { create } from "zustand";

const userStore = (set) => ({
    userData: {
        uid: "",
        name: "",
        token: "",
    },
    setUser: (value) =>
        set(() => ({
            userData: value,
        })),
    clearUser: () => set({ userData: { uid: "", name: "", token: "" } }),
});

const useUserStore = create(userStore);

export default useUserStore;
