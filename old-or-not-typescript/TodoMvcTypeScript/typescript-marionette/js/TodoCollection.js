var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var TodoCollection = (function (_super) {
        __extends(TodoCollection, _super);
        function TodoCollection() {
            _super.apply(this, arguments);
            this.model = TodoMVC.Todo;
            this.localStorage = new Backbone.LocalStorage("todos-typescript-marionette");
            this.comparator = "created";
        }
        TodoCollection.prototype.allCompleted = function () {
            return (this.getActive().length === 0);
        };
        TodoCollection.prototype.getActive = function () {
            return this.reject(function (todo) { return todo.completed; });
        };
        TodoCollection.prototype.getCompleted = function () {
            return this.filter(function (todo) { return todo.completed; });
        };
        return TodoCollection;
    }(Backbone.Collection));
    TodoMVC.TodoCollection = TodoCollection;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=TodoCollection.js.map