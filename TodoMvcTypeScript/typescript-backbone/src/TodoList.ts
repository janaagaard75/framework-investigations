import Todo from "Todo";

// The collection of todos is backed by localStorage instead of a remote server.
export default class TodoList extends Backbone.Collection<Todo> {

    // Reference to this collection's model.
    model = Todo;

    // Save all of the todo items under the todos namespace. This is all that is needed by Backbone.LocalStorage.
    localStorage = new Store("todos-typescript-backbone");

    // TODO: Setting the comparator to "order" should also work.
    // Using the equals syntax instead of a normal function to satify the typings file.
    comparator = (todo: Todo) => {
        // Todos are sorted by their original insertion order.
        return todo.order;
    };

    /** Filter down the list of all todo items that are completed. */
    completed(): Array<Todo> {
        return this.filter(todo => todo.completed);
    }

    /** We keep the todos in sequential order, despite being saved by unordered GUID in the database. This generates the next order number for new items. */
    nextOrder(): number {
        if (this.length === 0) {
            return 1;
        }

        return this.last().order + 1;
    }

    /** Filter down the list to only todo items that are still not completed. */
    remaining(): Array<Todo> {
        return this.filter(todo => !todo.completed);
    }
}
