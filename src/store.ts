import { create } from "zustand";

interface StoreState {
  redirect: boolean;
  setRedirect: (redirect: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  redirect: false,
  setRedirect: (redirect) => set({ redirect }),
}));
