var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var app = new TodoMVC.TodoApp();
    app.on("before:start", function () {
        app.setRootLayout();
    });
    app.on("start", function () {
        var controller = new TodoMVC.RouterController(app);
        controller.router = new TodoMVC.Router(controller);
        controller.start();
        Backbone.history.start();
    });
    app.start();
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=Bootstrap.js.map