var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var RouterController = (function (_super) {
        __extends(RouterController, _super);
        function RouterController(app) {
            _super.call(this);
            this.app = app;
        }
        RouterController.prototype.start = function () {
            this.showHeader(this.todos);
            this.showFooter(this.todos);
            this.showTodos(this.todos);
            this.todos.on("all", this.updateHiddenElements, this);
            this.todos.fetch();
        };
        RouterController.prototype.filterItems = function (filterString) {
            var newFilter = RouterController.convertStringToFilter(filterString);
            TodoMVC.FilterChannel.filterState.filter = newFilter;
        };
        RouterController.prototype.initialize = function () {
            this.todos = new TodoMVC.TodoCollection();
        };
        RouterController.convertStringToFilter = function (filterString) {
            switch (filterString) {
                case null:
                case "":
                    return TodoMVC.Filter.All;
                case "active":
                    return TodoMVC.Filter.Active;
                case "completed":
                    return TodoMVC.Filter.Completed;
            }
            throw new Error("Unknown filter string '" + filterString + "'.");
        };
        RouterController.prototype.showFooter = function (todos) {
            var footer = new TodoMVC.FooterView({
                collection: todos
            });
            this.app.root.showChildView("footer", footer);
        };
        RouterController.prototype.showHeader = function (todos) {
            var header = new TodoMVC.HeaderView({
                collection: todos
            });
            this.app.root.showChildView("header", header);
        };
        RouterController.prototype.showTodos = function (todos) {
            this.app.root.showChildView("main", new TodoMVC.TodosView({
                collection: todos
            }));
        };
        RouterController.prototype.updateHiddenElements = function () {
            $(".js-main, .js-footer").toggle(this.todos.length > 0);
        };
        return RouterController;
    }(Marionette.Object));
    TodoMVC.RouterController = RouterController;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=RouterController.js.map