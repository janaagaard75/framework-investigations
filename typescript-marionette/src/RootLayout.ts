namespace TodoMVC {
    "use strict";

    export class RootLayout extends Marionette.LayoutView<any> {
        constructor() {
            super({
                // TODO: Use classes instead of IDs.
                el: "#todoapp",
                regions: {
                    footer: "#footer",
                    header: "#header",
                    main: "#main"
                }
            });
        }
    }
}
