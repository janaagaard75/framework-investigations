namespace TodoMVC {
    "use strict";

    export class RootLayout extends Marionette.LayoutView<any> {
        constructor() {
            super({
                el: ".js-todoapp",
                regions: {
                    footer: ".js-footer",
                    header: ".js-header",
                    main: ".js-main"
                }
            });
        }
    }
}
