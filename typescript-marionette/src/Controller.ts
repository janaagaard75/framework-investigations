namespace TodoMVC {
    "use strict";

    // TODO: Apparently the Controller object has been deprecated. Use a standard Object instead.
    export class Controller extends Marionette.Controller {
        todoList: TodoList;

        filterChannelInstance: Backbone.Radio.Channel;

        // TODO: This should come from the definition file.
        router: Backbone.Router;

        get filterChannel() {
            if (this.filterChannelInstance === undefined) {
                // TODO: Wrap this nicely, so that the magic string isn't needed.
                this.filterChannelInstance = Backbone.Radio.channel("filter");
            }

            return this.filterChannelInstance;
        }

        initialize() {
            this.todoList = new TodoMVC.TodoList();
        }

        // Start the app by showing the appropriate views and fetching the list of todo items, if there are any.
        start() {
            this.showHeader(this.todoList);
            this.showFooter(this.todoList);
            this.showTodoList(this.todoList);
            this.todoList.on("all", this.updateHiddenElements, this);
            this.todoList.fetch();
        }

        updateHiddenElements() {
            $("#main, #footer").toggle(!!this.todoList.length);
        }

        showHeader(todoList: TodoList) {
            const header = new TodoMVC.HeaderLayout(todoList);
            TodoMVC.app.root.showChildView("header", header);
        }

        showFooter(todoList: TodoList) {
            const footer = new TodoMVC.FooterLayout(todoList);
            TodoMVC.app.root.showChildView("footer", footer);
        }

        showTodoList(todoList: TodoList) {
            TodoMVC.app.root.showChildView("main", new TodoMVC.ListView(todoList));
        }

        // Set the filter to show complete or all items.
        filterItems(filter: string) {
            const newFilter = filter && filter.trim() || "all";
            this.filterChannel.request("filterState").set("filter", newFilter);
        }
    }
}
