var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var RootLayout = (function (_super) {
        __extends(RootLayout, _super);
        function RootLayout() {
            _super.call(this, {
                el: ".js-todoapp",
                regions: {
                    footer: ".js-footer",
                    header: ".js-header",
                    main: ".js-main"
                }
            });
        }
        return RootLayout;
    }(Marionette.LayoutView));
    TodoMVC.RootLayout = RootLayout;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=RootLayout.js.map