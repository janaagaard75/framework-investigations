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

        get filterChannel() {
            if (this.filterChannelInstance === undefined) {
                // TODO: Wrap this nicely, so that the magic string isn't needed.
                this.filterChannelInstance = Backbone.Radio.channel("filter");
            }

            return this.filterChannelInstance;
        }

        initialize() {
            this.todos = new TodoMVC.TodoCollection();
        }

        // Start the app by showing the appropriate views and fetching the list of todo items, if there are any.
        start() {
            this.showHeader(this.todos);
            this.showFooter(this.todos);
            this.showTodos(this.todos);
            this.todos.on("all", this.updateHiddenElements, this);
            this.todos.fetch();
        }

        updateHiddenElements() {
            $("#main, #footer").toggle(this.todos.length > 0);
        }

        showHeader(todos: TodoCollection) {
            const header = new TodoMVC.HeaderLayout(todos);
            this.app.root.showChildView("header", header);
        }

        showFooter(todos: TodoCollection) {
            const footer = new TodoMVC.FooterLayout(todos);
            this.app.root.showChildView("footer", footer);
        }

        showTodos(todos: TodoCollection) {
            this.app.root.showChildView("main", new TodoMVC.TodosView(todos));
        }

        // Set the filter to show complete or all items.
        filterItems(filter: string) {
            const newFilter = filter && filter.trim() || "all";
            this.filterChannel.request("filterState").set("filter", newFilter);
        }
    }
}
