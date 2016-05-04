namespace TodoMVC {
    "use strict";

    export class Router extends Marionette.AppRouter {
        constructor(controller: Marionette.Object) {
            super({
                appRoutes: {
                    "*filter": "filterItems"
                },
                controller: controller
            });
        }
    }
}
