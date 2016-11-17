var TodoMVC;
(function (TodoMVC) {
    "use strict";
    (function (Filter) {
        Filter[Filter["Active"] = 0] = "Active";
        Filter[Filter["All"] = 1] = "All";
        Filter[Filter["Completed"] = 2] = "Completed";
    })(TodoMVC.Filter || (TodoMVC.Filter = {}));
    var Filter = TodoMVC.Filter;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=Filter.js.map