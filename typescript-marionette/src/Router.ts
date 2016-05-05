namespace TodoMVC {
    "use strict";

    export class Router extends Marionette.AppRouter {
        constructor(controller: RouterController) {
            super({
                appRoutes: {
                    // TODO: Is is possible to make a function reference to controller.filterItems?
                    "*filter": "filterItems"
                },
                controller: controller
            });
        }
    }
}
