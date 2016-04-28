namespace TodoMVC {
    "use strict";

    // TODO: TodoView is currently defined twice. Not good.
    /** Display an individual todo item, and respond to changes that are made to the item, including marking completed. */
    export class TodoView extends Marionette.ItemView<Todo> {
        constructor() {
            super();

            this.events = <any>{
                "click @ui.destroy": this.deleteModel,
                "dblclick @ui.label": this.onEditClick,
                "keydown @ui.edit": this.onEditKeypress,
                "focusout @ui.edit": this.onEditFocusout,
                "click @ui.toggle": this.toggle
            };

            // TODO: These elements become jQuery elements. Is there any way to add static typing to this?
            this.ui = {
                destroy: ".destroy",
                edit: ".edit",
                label: "label",
                toggle: ".toggle"
            };

            // TODO: Might have to call delegateEvents here.
        }

        get editElement(): JQuery {
            return this.ui.edit;
        }

        // TODO: This probably has to be set in the super call.
        tagName = "li";

        template = "#template-todoItemView";

        modelEvents = {
            change: this.render
        };

        className = () => {
            return this.model.get("completed") ? "completed" : "active";
        };

        deleteModel() {
            this.model.destroy();
        }

        toggle() {
            this.model.toggle().save();
        }

        onEditClick() {
            this.$el.addClass("editing");
            this.editElement.focus();
            this.editElement.val(this.editElement.val());
        }

        onEditFocusout() {
            const todoText = this.editElement.val().trim();
            if (todoText) {
                this.model.title = todoText;
                this.model.save();
                this.$el.removeClass("editing");
            } else {
                this.destroy();
            }
        }

        onEditKeypress(e: KeyboardEvent) {
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
    }
}
