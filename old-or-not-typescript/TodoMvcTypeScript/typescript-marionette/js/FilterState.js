var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var FilterState = (function (_super) {
        __extends(FilterState, _super);
        function FilterState() {
            _super.call(this);
            this.filter = TodoMVC.Filter.All;
        }
        Object.defineProperty(FilterState.prototype, "filter", {
            get: function () {
                return this.get("filter");
            },
            set: function (filter) {
                this.set("filter", filter);
            },
            enumerable: true,
            configurable: true
        });
        return FilterState;
    }(Backbone.Model));
    TodoMVC.FilterState = FilterState;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=FilterState.js.map