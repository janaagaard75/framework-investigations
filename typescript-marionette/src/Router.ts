namespace TodoMVC {
    "use strict";

    export class Router extends Marionette.AppRouter {
        constructor(controller: RouterController) {
            super({
                appRoutes: {
                    // Marionette does not support referencing controller.filterItems.
                    "*filter": "filterItems"
                },
                controller: controller
            });
        }
    }
}
