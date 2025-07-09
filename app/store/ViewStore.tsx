import { create } from "zustand";

interface ViewState {
  currentView: number;
  setCurrentView: (index: number) => void;
  path: string[]; // path as array of folder ids, e.g. ['work', 'about']
  setCurrentPath: (path: string[]) => void;
  openedFile: string | null;
  setOpenedFile: (fileName: string | null) => void;
}

export const useViewSettings = create<ViewState>((set, get) => ({
  currentView: 2,
  setCurrentView: (index: number) => {
    console.log(index);
    set({ currentView: index });
  },
  path: [],
  setCurrentPath: (path) => set({ path: path }),
  openedFile: null,
  setOpenedFile: (fileName) => {
    console.log(fileName);
    set({ openedFile: fileName });
  },
}));
