namespace TodoMVC {
    "use strict";

    export class TodoApp extends Marionette.Application {
        root: RootLayout;

        setRootLayout() {
            this.root = new RootLayout();
        }
    }
}
