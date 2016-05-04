namespace TodoMVC {
    "use strict";

    // TODO: Apparently the Controller object has been deprecated. Use a standard Object instead.
    export class Controller extends Marionette.Controller {
        constructor(
            private app: TodoApp
        ) {
            super();
        }

        filterChannelInstance: Backbone.Radio.Channel;
        // TODO: 'router' should come from the definition file.
        router: Backbone.Router;
        todos: TodoCollection;

        // Start the app by showing the appropriate views and fetching the list of todo items, if there are any.
        start() {
            this.showHeader(this.todos);
            this.showFooter(this.todos);
            this.showTodos(this.todos);
            this.todos.on("all", this.updateHiddenElements, this);
            this.todos.fetch();
        }

        private get filterChannel() {
            if (this.filterChannelInstance === undefined) {
                // TODO: Wrap this nicely, so that the magic string isn't needed.
                this.filterChannelInstance = Backbone.Radio.channel("filter");
            }

            return this.filterChannelInstance;
        }

        // Set the filter to show complete or all items.
        filterItems(filter: string) {
            const newFilter = filter && filter.trim() || "all";
            this.filterChannel.request("filterState").set("filter", newFilter);
        }

        initialize() {
            this.todos = new TodoMVC.TodoCollection();
        }

        private showFooter(todos: TodoCollection) {
            const footer = new TodoMVC.FooterView({
                collection: todos
            });
            this.app.root.showChildView("footer", footer);
        }

        private showHeader(todos: TodoCollection) {
            const header = new TodoMVC.HeaderView({
                collection: todos
            });
            this.app.root.showChildView("header", header);
        }

        private showTodos(todos: TodoCollection) {
            this.app.root.showChildView("main", new TodoMVC.TodosView({
                collection: todos
            }));
        }

        private updateHiddenElements() {
            $("#main, #footer").toggle(this.todos.length > 0);
        }
    }
}
