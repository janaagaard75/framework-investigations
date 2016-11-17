var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var Todo = (function (_super) {
        __extends(Todo, _super);
        function Todo() {
            _super.apply(this, arguments);
        }
        Todo.prototype.defaults = function () {
            return {
                completed: false,
                created: Date.now(),
                title: ""
            };
        };
        Object.defineProperty(Todo.prototype, "completed", {
            get: function () {
                return this.get("completed");
            },
            set: function (newValue) {
                this.set("completed", newValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Todo.prototype, "title", {
            get: function () {
                return this.get("title");
            },
            set: function (newTitle) {
                this.set("title", newTitle);
            },
            enumerable: true,
            configurable: true
        });
        Todo.prototype.matchesFilter = function (filter) {
            switch (filter) {
                case TodoMVC.Filter.Active:
                    return !this.completed;
                case TodoMVC.Filter.All:
                    return true;
                case TodoMVC.Filter.Completed:
                    return this.completed;
            }
            throw "Unknown filter '" + filter + "'.";
        };
        Todo.prototype.toggle = function () {
            this.completed = !this.completed;
            return this;
        };
        return Todo;
    }(Backbone.Model));
    TodoMVC.Todo = Todo;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=Todo.js.map