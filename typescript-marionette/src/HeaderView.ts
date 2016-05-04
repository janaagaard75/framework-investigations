namespace TodoMVC {
    "use strict";

    interface HeaderViewOptions {
        collection: TodoCollection;
    }

    export class HeaderView extends Marionette.ItemView<Todo> {
        constructor(options: HeaderViewOptions) {
            super();

            this.collection = options.collection;

            this.events = <any>{
                "keypress @ui.input": this.saveOnEnter,
                "keyup @ui.input": this.cancelOnEscape
            };
            this.delegateEvents();
        }

        collection: TodoCollection;

        template = "#headerTemplate";

        ui = {
            input: "#new-todo"
        };

        private get inputElement(): JQuery {
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
