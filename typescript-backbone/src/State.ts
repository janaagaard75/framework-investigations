import TodoList from "TodoList";

export type TaskFilter = "" | "active" | "completed";

class StateInstance {
    constructor() {
        this.taskFilter = "";
        this.todos = new TodoList();
    }
    public taskFilter: TaskFilter;
    public todos: TodoList;
}

export default class State {
    private static stateInstance: StateInstance;

    public static get instance() {
        if (State.stateInstance === undefined) {
            State.stateInstance = new StateInstance();
        }

        return State.stateInstance;
    }
}
