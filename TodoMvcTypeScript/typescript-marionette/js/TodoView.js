var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var TodoView = (function (_super) {
        __extends(TodoView, _super);
        function TodoView(options) {
            var _this = this;
            _super.call(this, {
                tagName: "li"
            });
            this.modelEvents = {
                change: this.render
            };
            this.template = "#todoViewTemplate";
            this.className = function () {
                return _this.model.completed ? "completed" : "active";
            };
            this.model = options.model;
            this.ui = {
                destroy: ".destroy",
                edit: ".edit",
                label: "label",
                toggle: ".toggle"
            };
            this.events = {
                "click @ui.destroy": this.deleteModel,
                "dblclick @ui.label": this.onEditClick,
                "keydown @ui.edit": this.onEditKeypress,
                "focusout @ui.edit": this.onEditFocusout,
                "click @ui.toggle": this.toggle
            };
            this.delegateEvents();
        }
        Object.defineProperty(TodoView.prototype, "editElement", {
            get: function () {
                return this.ui.edit;
            },
            enumerable: true,
            configurable: true
        });
        TodoView.prototype.deleteModel = function () {
            this.model.destroy();
        };
        TodoView.prototype.onEditClick = function () {
            this.$el.addClass("editing");
            this.editElement.focus();
            this.editElement.val(this.editElement.val());
        };
        TodoView.prototype.onEditFocusout = function () {
            var todoText = this.editElement.val().trim();
            if (todoText) {
                this.model.title = todoText;
                this.model.save();
                this.$el.removeClass("editing");
            }
            else {
                this.destroy();
            }
        };
        TodoView.prototype.onEditKeypress = function (e) {
            switch (e.which) {
                case 13:
                    this.onEditFocusout();
                    break;
                case 27:
                    this.editElement.val(this.model.title);
                    this.$el.removeClass("editing");
                    break;
            }
        };
        TodoView.prototype.toggle = function () {
            this.model.toggle().save();
        };
        return TodoView;
    }(Marionette.ItemView));
    TodoMVC.TodoView = TodoView;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=TodoView.js.map