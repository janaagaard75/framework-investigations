var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var FooterView = (function (_super) {
        __extends(FooterView, _super);
        function FooterView(options) {
            var _this = this;
            _super.call(this);
            this.collectionEvents = {
                all: "render"
            };
            this.template = "#footerTemplate";
            this.templateHelpers = {
                activeCountLabel: function () {
                    return (_this.collection.getActive().length === 1 ? "item" : "items") + " left";
                }
            };
            this.ui = {
                active: ".active a",
                all: ".all a",
                clear: ".js-clear-completed",
                completed: ".completed a",
                filters: ".js-filters a",
                summary: ".js-todo-count"
            };
            this.collection = options.collection;
            this.events = {
                "click @ui.clear": this.onClearClick
            };
            this.delegateEvents();
        }
        FooterView.prototype.initialize = function () {
            this.listenTo(TodoMVC.FilterChannel.filterState, "change:filter", this.updateFilterSelection);
        };
        FooterView.prototype.onRender = function () {
            this.$el.parent().toggle(this.collection.length > 0);
            this.updateFilterSelection();
        };
        FooterView.prototype.serializeData = function () {
            var active = this.collection.getActive().length;
            var total = this.collection.length;
            return {
                activeCount: active,
                completedCount: total - active,
                totalCount: total
            };
        };
        Object.defineProperty(FooterView.prototype, "filterElements", {
            get: function () {
                return this.ui.filters;
            },
            enumerable: true,
            configurable: true
        });
        FooterView.prototype.getFilterElement = function (filter) {
            switch (filter) {
                case TodoMVC.Filter.Active:
                    return this.ui.active;
                case TodoMVC.Filter.All:
                    return this.ui.all;
                case TodoMVC.Filter.Completed:
                    return this.ui.completed;
            }
            throw "Unknown filter '" + filter + "'.";
        };
        FooterView.prototype.onClearClick = function () {
            var completed = this.collection.getCompleted();
            completed.forEach(function (todo) {
                todo.destroy();
            });
        };
        FooterView.prototype.updateFilterSelection = function () {
            this.filterElements.removeClass("selected");
            this.getFilterElement(TodoMVC.FilterChannel.filterState.filter).addClass("selected");
        };
        return FooterView;
    }(Marionette.ItemView));
    TodoMVC.FooterView = FooterView;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=FooterView.js.map