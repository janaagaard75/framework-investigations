var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var Router = (function (_super) {
        __extends(Router, _super);
        function Router(controller) {
            _super.call(this, {
                appRoutes: {
                    "*filter": "filterItems"
                },
                controller: controller
            });
        }
        return Router;
    }(Marionette.AppRouter));
    TodoMVC.Router = Router;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=Router.js.map