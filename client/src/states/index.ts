import create from 'zustand';

interface InputStore {
      isInputFocused: boolean;
      setFocus: (focused: boolean) => void;
}

export const useInputStore = create<InputStore>((set) => ({
      isInputFocused: false,
      setFocus: (focused) => set({ isInputFocused: focused }),
}));
