namespace TodoMVC {
    "use strict";

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
