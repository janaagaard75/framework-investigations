namespace TodoMVC {
    "use strict";

    // TODO: Rename to TodoCollection when all code has been converted to TypeScript.
    export class TodoList extends Backbone.Collection<Todo> {
        model = Todo;
        localStorage = new Backbone.LocalStorage("todos-typescript-marionette");
        comparator = "created";

        getActive() {
            return this.reject(todo => todo.completed);
        }

        getCompleted() {
            return this.filter(todo => todo.completed);
        }
    }
}
