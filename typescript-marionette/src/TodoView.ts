namespace TodoMVC {
    "use strict";

    // TODO: TodoView is currently defined twice. Not good.
    /** Display an individual todo item, and respond to changes that are made to the item, including marking completed. */
    export class TodoView extends Marionette.ItemView<Todo> {
        constructor() {
            super({
                tagName: "li"
            });

            this.model = arguments[0].model;

            // TODO: These elements become jQuery elements. Is there any way to add static typing to this?
            this.ui = {
                destroy: ".destroy",
                edit: ".edit",
                label: "label",
                toggle: ".toggle"
            };

            this.events = <any>{
                "click @ui.destroy": this.deleteModel,
                "dblclick @ui.label": this.onEditClick,
                "keydown @ui.edit": this.onEditKeypress,
                "focusout @ui.edit": this.onEditFocusout,
                "click @ui.toggle": this.toggle
            };
            this.delegateEvents();
        }

        modelEvents = {
            change: this.render
        };

        template = "#todoViewTemplate";

        private get editElement(): JQuery {
            return this.ui.edit;
        }

        // Property syntax required by the definition file.
        className = () => {
            return this.model.get("completed") ? "completed" : "active";
        };

        private deleteModel() {
            this.model.destroy();
        }

        private onEditClick() {
            this.$el.addClass("editing");
            this.editElement.focus();
            this.editElement.val(this.editElement.val());
        }

        private onEditFocusout() {
            const todoText = this.editElement.val().trim();
            if (todoText) {
                this.model.title = todoText;
                this.model.save();
                this.$el.removeClass("editing");
            } else {
                this.destroy();
            }
        }

        private onEditKeypress(e: KeyboardEvent) {
            switch (e.which) {
                case KeyCode.Enter:
                    this.onEditFocusout();
                    break;

                case KeyCode.Escape:
                    this.editElement.val(this.model.title);
                    this.$el.removeClass("editing");
                    break;
            }
        }

        private toggle() {
            this.model.toggle().save();
        }
    }
}
