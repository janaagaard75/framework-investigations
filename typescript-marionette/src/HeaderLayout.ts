namespace TodoMVC {
    "use strict";

    // TODO: Rename to HeaderView.
    export class HeaderLayout extends Marionette.ItemView<Todo> {
        constructor(collection: TodoList) {
            super();

            this.collection = collection;

            this.events = <any>{
                "keypress @ui.input": this.saveOnEnter,
                "keyup @ui.input": this.cancelOnEscape
            };
            this.delegateEvents();
        }

        ui = {
            input: "#new-todo"
        };

        template = "#template-header";

        get inputElement(): JQuery {
            return <any>this.ui.input;
        }

        private cancelOnEscape(e: KeyboardEvent) {
            if (e.which === KeyCode.Escape) {
                this.render();
            }
        }

        private saveOnEnter(e: KeyboardEvent) {
            if (e.which === KeyCode.Enter) {
                const todoText: string = this.inputElement.val().trim();
                if (todoText.length >= 1) {
                    this.collection.create({
                        title: todoText
                    });
                    this.inputElement.val("");
                }
            }
        }
    }
}
