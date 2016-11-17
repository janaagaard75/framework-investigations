var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var HeaderView = (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView(options) {
            _super.call(this);
            this.template = "#headerTemplate";
            this.ui = {
                input: ".js-new-todo"
            };
            this.collection = options.collection;
            this.events = {
                "keypress @ui.input": this.saveOnEnter,
                "keyup @ui.input": this.cancelOnEscape
            };
            this.delegateEvents();
        }
        Object.defineProperty(HeaderView.prototype, "inputElement", {
            get: function () {
                return this.ui.input;
            },
            enumerable: true,
            configurable: true
        });
        HeaderView.prototype.cancelOnEscape = function (e) {
            if (e.which === 27) {
                this.render();
            }
        };
        HeaderView.prototype.saveOnEnter = function (e) {
            if (e.which === 13) {
                var todoText = this.inputElement.val().trim();
                if (todoText.length >= 1) {
                    this.collection.create({
                        title: todoText
                    });
                    this.inputElement.val("");
                }
            }
        };
        return HeaderView;
    }(Marionette.ItemView));
    TodoMVC.HeaderView = HeaderView;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=HeaderView.js.map