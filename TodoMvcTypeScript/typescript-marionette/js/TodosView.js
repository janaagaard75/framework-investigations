var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var TodosView = (function (_super) {
        __extends(TodosView, _super);
        function TodosView(options) {
            _super.call(this, {
                childViewContainer: ".js-todo-list"
            });
            this.childView = TodoMVC.TodoView;
            this.collectionEvents = {
                "change:completed": this.render,
                "all": this.setCheckAllState
            };
            this.template = "#todosViewTemplate";
            this.ui = {
                toggle: ".js-toggle-all"
            };
            this.collection = options.collection;
            this.events = {
                "click @ui.toggle": this.onToggleAllClick
            };
            this.delegateEvents();
        }
        Object.defineProperty(TodosView.prototype, "toggleElement", {
            get: function () {
                return this.ui.toggle;
            },
            enumerable: true,
            configurable: true
        });
        TodosView.prototype.filter = function (child) {
            var filteredOn = TodoMVC.FilterChannel.filterState.filter;
            return child.matchesFilter(filteredOn);
        };
        TodosView.prototype.initialize = function () {
            this.listenTo(TodoMVC.FilterChannel.filterState, "change:filter", this.render);
        };
        TodosView.prototype.onToggleAllClick = function (e) {
            var isChecked = e.currentTarget.checked;
            this.collection.each(function (todo) {
                todo.save({ completed: isChecked });
            });
        };
        TodosView.prototype.setCheckAllState = function () {
            this.toggleElement.prop("checked", this.collection.allCompleted());
            this.$el.parent().toggle(this.collection.length > 0);
        };
        return TodosView;
    }(Marionette.CompositeView));
    TodoMVC.TodosView = TodosView;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=TodosView.js.map