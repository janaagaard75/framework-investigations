namespace TodoMVC {
    "use strict";

    export class RouterController extends Marionette.Object {
        constructor(
            private app: TodoApp
        ) {
            super();
        }

        router: Backbone.Router;
        todos: TodoCollection;

        /** Start the app by showing the appropriate views and fetching the list of todo items, if there are any. */
        start() {
            this.showHeader(this.todos);
            this.showFooter(this.todos);
            this.showTodos(this.todos);
            this.todos.on("all", this.updateHiddenElements, this);
            this.todos.fetch();
        }

        /** Set the filter to show complete or all items. */
        filterItems(filterString: string) {
            const newFilter = RouterController.convertStringToFilter(filterString);
            FilterChannel.filterState.filter = newFilter;
        }

        initialize() {
            this.todos = new TodoCollection();
        }

        private static convertStringToFilter(filterString: string): Filter {
            switch (filterString) {
                case null:
                case "":
                    return Filter.All;

                case "active":
                    return Filter.Active;

                case "completed":
                    return Filter.Completed;
            }

            throw new Error(`Unknown filter string '${filterString}'.`);
        }

        private showFooter(todos: TodoCollection) {
            const footer = new FooterView({
                collection: todos
            });
            this.app.root.showChildView("footer", footer);
        }

        private showHeader(todos: TodoCollection) {
            const header = new HeaderView({
                collection: todos
            });
            this.app.root.showChildView("header", header);
        }

        private showTodos(todos: TodoCollection) {
            this.app.root.showChildView("main", new TodosView({
                collection: todos
            }));
        }

        private updateHiddenElements() {
            $(".js-main, .js-footer").toggle(this.todos.length > 0);
        }
    }
}
