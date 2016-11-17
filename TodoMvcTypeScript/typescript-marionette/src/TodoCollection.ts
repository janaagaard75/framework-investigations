namespace TodoMVC {
    "use strict";

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
