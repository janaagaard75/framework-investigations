namespace TodoMVC {
    "use strict";

    export const app = new TodoApp();

    app.on("before:start", () => {
        app.setRootLayout();
    });

    // After we initialize the app, we want to kick off the router and controller, which will handle initializing our Views.
    app.on("start", function () {
        const controller = new TodoMVC.Controller();
        controller.router = new TodoMVC.Router(controller);

        controller.start();
        Backbone.history.start();
    });

    app.start();
}
