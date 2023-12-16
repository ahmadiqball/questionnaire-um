import { create } from "zustand";
import { questions } from "../constants/question";

interface Store {
  storeAnswers: typeof questions;
  setStoreAnswers: (payload: typeof questions) => void;
}

const store = create<Store>((set) => ({
  storeAnswers: questions,
  setStoreAnswers: (payload: typeof questions) => set({ storeAnswers: payload })
}))

export const useStore = () => {
  const { storeAnswers, setStoreAnswers } = store((state) => ({
    storeAnswers: state.storeAnswers,
    setStoreAnswers: state.setStoreAnswers
  }))

  return { storeAnswers, setStoreAnswers }
};