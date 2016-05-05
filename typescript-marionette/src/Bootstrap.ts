namespace TodoMVC {
    "use strict";

    const app = new TodoApp();

    app.on("before:start", () => {
        app.setRootLayout();
    });

    // After we initialize the app, we want to kick off the router and controller, which will handle initializing our views.
    app.on("start", () => {
        const controller = new RouterController(app);
        controller.router = new Router(controller);

        controller.start();
        Backbone.history.start();
    });

    app.start();
}
