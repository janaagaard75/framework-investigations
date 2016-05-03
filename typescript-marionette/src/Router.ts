namespace TodoMVC {
    "use strict";

    export class Router extends Marionette.AppRouter {
        constructor(controller: Marionette.Controller) {
            super({
                controller: controller
            });
        }

        appRoutes = {
            "*filter": "filterItems"
        };
    }
}
