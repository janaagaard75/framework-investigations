namespace TodoMVC {
    "use strict";

    // TODO: Rename to TodoCollection when all code has been converted to TypeScript.
    export class TodoCollection extends Backbone.Collection<Todo> {
        model = Todo;
        localStorage = new Backbone.LocalStorage("todos-typescript-marionette");
        comparator = "created";

        allCompleted(): boolean {
            return (this.getActive().length === 0);
        }

        getActive(): Array<Todo> {
            return this.reject(todo => todo.completed);
        }

        getCompleted(): Array<Todo> {
            return this.filter(todo => todo.completed);
        }
    }
}
