/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ReactDOM, TodoFooter_1, TodoItem_1, TodoModel_1) {
	    "use strict";
	    var TodoApp = (function (_super) {
	        __extends(TodoApp, _super);
	        function TodoApp(props) {
	            _super.call(this, props);
	            this.state = {
	                editing: null,
	                nowShowing: 0
	            };
	        }
	        TodoApp.prototype.componentDidMount = function () {
	            var router = Router({
	                "/": this.setState.bind(this, { nowShowing: 0 }),
	                "/active": this.setState.bind(this, { nowShowing: 1 }),
	                "/completed": this.setState.bind(this, { nowShowing: 2 })
	            });
	            router.init("/");
	        };
	        TodoApp.prototype.handleNewTodoKeyDown = function (event) {
	            if (event.keyCode !== 13) {
	                return;
	            }
	            event.preventDefault();
	            var val = ReactDOM.findDOMNode(this.refs["newField"]).value.trim();
	            if (val) {
	                this.props.model.addTodo(val);
	                ReactDOM.findDOMNode(this.refs["newField"]).value = "";
	            }
	        };
	        TodoApp.prototype.toggleAll = function (event) {
	            var target = event.target;
	            var checked = target.checked;
	            this.props.model.toggleAll(checked);
	        };
	        TodoApp.prototype.toggle = function (todoToToggle) {
	            this.props.model.toggle(todoToToggle);
	        };
	        TodoApp.prototype.destroy = function (todo) {
	            this.props.model.destroy(todo);
	        };
	        TodoApp.prototype.edit = function (todo) {
	            this.setState({ editing: todo.id });
	        };
	        TodoApp.prototype.save = function (todoToSave, text) {
	            this.props.model.save(todoToSave, text);
	            this.setState({ editing: null });
	        };
	        TodoApp.prototype.cancel = function () {
	            this.setState({ editing: null });
	        };
	        TodoApp.prototype.clearCompleted = function () {
	            this.props.model.clearCompleted();
	        };
	        TodoApp.prototype.render = function () {
	            var _this = this;
	            var todos = this.props.model.todos;
	            var shownTodos = todos.filter(function (todo) {
	                switch (_this.state.nowShowing) {
	                    case 0:
	                        return true;
	                    case 1:
	                        return !todo.completed;
	                    case 2:
	                        return todo.completed;
	                }
	            });
	            var todoItems = shownTodos.map(function (todo) {
	                return (React.createElement(TodoItem_1.default, {key: todo.id, todo: todo, onToggle: _this.toggle.bind(_this, todo), onDestroy: _this.destroy.bind(_this, todo), onEdit: _this.edit.bind(_this, todo), editing: _this.state.editing === todo.id, onSave: _this.save.bind(_this, todo), onCancel: function (e) { return _this.cancel(); }}));
	            });
	            var activeTodoCount = todos.reduce(function (sum, todo) {
	                return todo.completed ? sum : sum + 1;
	            }, 0);
	            var completedCount = todos.length - activeTodoCount;
	            var footer;
	            if (activeTodoCount || completedCount) {
	                footer =
	                    React.createElement(TodoFooter_1.default, {count: activeTodoCount, completedCount: completedCount, nowShowing: this.state.nowShowing, onClearCompleted: function (e) { return _this.clearCompleted(); }});
	            }
	            var main;
	            if (todos.length) {
	                main = (React.createElement("section", {className: "main"}, React.createElement("input", {className: "toggle-all", type: "checkbox", onChange: function (e) { return _this.toggleAll(e); }, checked: activeTodoCount === 0}), React.createElement("ul", {className: "todo-list"}, todoItems)));
	            }
	            return (React.createElement("div", null, React.createElement("header", {className: "header"}, React.createElement("h1", null, "todos"), React.createElement("input", {ref: "newField", className: "new-todo", placeholder: "What needs to be done?", onKeyDown: function (e) { return _this.handleNewTodoKeyDown(e); }, autoFocus: true})), main, footer));
	        };
	        return TodoApp;
	    }(React.Component));
	    var model = new TodoModel_1.default("react-todos");
	    function render() {
	        ReactDOM.render(React.createElement(TodoApp, {model: model}), document.getElementsByClassName("todoapp")[0]);
	    }
	    model.subscribe(render);
	    render();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, Utils_1) {
	    "use strict";
	    var TodoFooter = (function (_super) {
	        __extends(TodoFooter, _super);
	        function TodoFooter() {
	            _super.apply(this, arguments);
	        }
	        TodoFooter.prototype.render = function () {
	            var activeTodoWord = Utils_1.default.pluralize(this.props.count, "item");
	            var clearButton = null;
	            if (this.props.completedCount > 0) {
	                clearButton = (React.createElement("button", {className: "clear-completed", onClick: this.props.onClearCompleted}, "Clear completed"));
	            }
	            var nowShowing = this.props.nowShowing;
	            return (React.createElement("footer", {className: "footer"}, React.createElement("span", {className: "todo-count"}, React.createElement("strong", null, this.props.count), " ", activeTodoWord, " left"), React.createElement("ul", {className: "filters"}, React.createElement("li", null, React.createElement("a", {href: "#/", className: classNames({ selected: nowShowing === 0 })}, "All")), " ", React.createElement("li", null, React.createElement("a", {href: "#/active", className: classNames({ selected: nowShowing === 1 })}, "Active")), " ", React.createElement("li", null, React.createElement("a", {href: "#/completed", className: classNames({ selected: nowShowing === 2 })}, "Completed"))), clearButton));
	        };
	        return TodoFooter;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TodoFooter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var Utils = (function () {
	        function Utils() {
	        }
	        Utils.extend = function () {
	            var objs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                objs[_i - 0] = arguments[_i];
	            }
	            var newObj = {};
	            for (var i = 0; i < objs.length; i++) {
	                var obj = objs[i];
	                for (var key in obj) {
	                    if (obj.hasOwnProperty(key)) {
	                        newObj[key] = obj[key];
	                    }
	                }
	            }
	            return newObj;
	        };
	        Utils.pluralize = function (count, word) {
	            return count === 1 ? word : word + "s";
	        };
	        Utils.store = function (namespace, data) {
	            if (data) {
	                return localStorage.setItem(namespace, JSON.stringify(data));
	            }
	            var store = localStorage.getItem(namespace);
	            return (store && JSON.parse(store)) || [];
	        };
	        Utils.uuid = function () {
	            var uuid = "";
	            for (var i = 0; i < 32; i++) {
	                var random = Math.random() * 16 | 0;
	                if (i === 8 || i === 12 || i === 16 || i === 20) {
	                    uuid += "-";
	                }
	                uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
	            }
	            return uuid;
	        };
	        return Utils;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ReactDOM) {
	    "use strict";
	    var TodoItem = (function (_super) {
	        __extends(TodoItem, _super);
	        function TodoItem(props) {
	            _super.call(this, props);
	            this.state = { editText: this.props.todo.title };
	        }
	        TodoItem.prototype.handleSubmit = function (event) {
	            var val = this.state.editText.trim();
	            if (val.length >= 1) {
	                this.props.onSave(val);
	                this.setState({ editText: val });
	            }
	            else {
	                this.props.onDestroy();
	            }
	        };
	        TodoItem.prototype.handleEdit = function () {
	            this.props.onEdit();
	            this.setState({ editText: this.props.todo.title });
	        };
	        TodoItem.prototype.handleKeyDown = function (event) {
	            switch (event.keyCode) {
	                case 13:
	                    this.handleSubmit(event);
	                    break;
	                case 27:
	                    this.setState({ editText: this.props.todo.title });
	                    this.props.onCancel(event);
	                    break;
	            }
	        };
	        TodoItem.prototype.handleChange = function (event) {
	            var input = event.target;
	            this.setState({ editText: input.value });
	        };
	        TodoItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	            return (nextProps.todo !== this.props.todo ||
	                nextProps.editing !== this.props.editing ||
	                nextState.editText !== this.state.editText);
	        };
	        TodoItem.prototype.componentDidUpdate = function (prevProps) {
	            if (!prevProps.editing && this.props.editing) {
	                var node = ReactDOM.findDOMNode(this.refs["editField"]);
	                node.focus();
	                node.setSelectionRange(node.value.length, node.value.length);
	            }
	        };
	        TodoItem.prototype.render = function () {
	            var _this = this;
	            return (React.createElement("li", {className: classNames({
	                completed: this.props.todo.completed,
	                editing: this.props.editing
	            })}, React.createElement("div", {className: "view"}, React.createElement("input", {className: "toggle", type: "checkbox", checked: this.props.todo.completed, onChange: this.props.onToggle}), React.createElement("label", {onDoubleClick: function (e) { return _this.handleEdit(); }}, this.props.todo.title), React.createElement("button", {className: "destroy", onClick: this.props.onDestroy})), React.createElement("input", {ref: "editField", className: "edit", value: this.state.editText, onBlur: function (e) { return _this.handleSubmit(e); }, onChange: function (e) { return _this.handleChange(e); }, onKeyDown: function (e) { return _this.handleKeyDown(e); }})));
	        };
	        return TodoItem;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TodoItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Utils_1) {
	    "use strict";
	    var TodoModel = (function () {
	        function TodoModel(key) {
	            this.key = key;
	            this.todos = Utils_1.default.store(key);
	            this.onChanges = [];
	        }
	        TodoModel.prototype.subscribe = function (onChange) {
	            this.onChanges.push(onChange);
	        };
	        TodoModel.prototype.inform = function () {
	            Utils_1.default.store(this.key, this.todos);
	            this.onChanges.forEach(function (onChange) { onChange(); });
	        };
	        TodoModel.prototype.addTodo = function (title) {
	            this.todos = this.todos.concat({
	                completed: false,
	                id: Utils_1.default.uuid(),
	                title: title
	            });
	            this.inform();
	        };
	        TodoModel.prototype.toggleAll = function (checked) {
	            this.todos = this.todos.map(function (todo) {
	                return Utils_1.default.extend({}, todo, { completed: checked });
	            });
	            this.inform();
	        };
	        TodoModel.prototype.toggle = function (todoToToggle) {
	            this.todos = this.todos.map(function (todo) {
	                return todo !== todoToToggle ?
	                    todo :
	                    Utils_1.default.extend({}, todo, { completed: !todo.completed });
	            });
	            this.inform();
	        };
	        TodoModel.prototype.destroy = function (todoToDestroy) {
	            this.todos = this.todos.filter(function (todo) {
	                return todo !== todoToDestroy;
	            });
	            this.inform();
	        };
	        TodoModel.prototype.save = function (todoToSave, text) {
	            this.todos = this.todos.map(function (todo) {
	                return todo !== todoToSave ? todo : Utils_1.default.extend({}, todo, { title: text });
	            });
	            this.inform();
	        };
	        TodoModel.prototype.clearCompleted = function () {
	            this.todos = this.todos.filter(function (todo) {
	                return !todo.completed;
	            });
	            this.inform();
	        };
	        return TodoModel;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TodoModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map