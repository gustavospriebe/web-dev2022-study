import { create } from "zustand";

// implementar uuid nos ids das tasks

const store = (set) => ({
    tasks: [{ title: "Test Task", status: "PLANNED" }],
    addTask: (title, status) =>
        set((store) => ({
            tasks: [...store.tasks, { title, status }],
        })),
});

export const useStore = create(store);
