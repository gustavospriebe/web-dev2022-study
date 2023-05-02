import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
    tasks: [],
    draggedTask: null,
    addTask: (title, status) =>
        set(
            (store) => ({
                tasks: [...store.tasks, { id: uuidv4(), title, status }],
            }),
            false,
            "addTask"
        ),
    deleteTask: (title) =>
        set(
            (store) => ({
                tasks: store.tasks.filter((t) => t.title !== title),
            }),
            false,
            "deleteTask"
        ),
    draggableTask: (title) =>
        set({ draggedTask: title }, false, "draggableTask"),
    moveTask: (title, status) =>
        set(
            (store) => ({
                tasks: store.tasks.map((task) =>
                    task.title === title
                        ? { id: uuidv4(), title, status }
                        : task
                ),
            }),
            false,
            "moveTask"
        ),
});

export const useStore = create(persist(devtools(store), { name: "store" }));
