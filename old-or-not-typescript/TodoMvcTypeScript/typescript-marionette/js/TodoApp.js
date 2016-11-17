var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var TodoApp = (function (_super) {
        __extends(TodoApp, _super);
        function TodoApp() {
            _super.apply(this, arguments);
        }
        TodoApp.prototype.setRootLayout = function () {
            this.root = new TodoMVC.RootLayout();
        };
        return TodoApp;
    }(Marionette.Application));
    TodoMVC.TodoApp = TodoApp;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=TodoApp.js.map