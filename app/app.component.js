"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.newTodoTitle = '';
        this.todos = [
            { title: 'Learn Angular component basics', completed: true },
            { title: 'Build a Todo app', completed: false }
        ];
    }
    AppComponent.prototype.addTodo = function () {
        var title = this.newTodoTitle.trim();
        if (!title) {
            return;
        }
        this.todos.push({ title: title, completed: false });
        this.newTodoTitle = '';
    };
    AppComponent.prototype.removeTodo = function (index) {
        this.todos.splice(index, 1);
    };
    AppComponent.prototype.remainingCount = function () {
        return this.todos.filter(function (todo) {
            return !todo.completed;
        }).length;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            template: "\n    <section class=\"todo-app\">\n      <h1>Todo App</h1>\n      <p class=\"subtitle\">A small Angular project for learning.</p>\n\n      <div class=\"add-row\">\n        <input\n          [(ngModel)]=\"newTodoTitle\"\n          (keyup.enter)=\"addTodo()\"\n          placeholder=\"What do you want to do?\"\n        />\n        <button (click)=\"addTodo()\">Add</button>\n      </div>\n\n      <p class=\"hint\" *ngIf=\"todos.length === 0\">No tasks yet. Add your first one!</p>\n\n      <ul>\n        <li *ngFor=\"let todo of todos; let i = index\" [class.done]=\"todo.completed\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"todo.completed\" />\n            <span>{{ todo.title }}</span>\n          </label>\n          <button (click)=\"removeTodo(i)\" class=\"delete-btn\">Delete</button>\n        </li>\n      </ul>\n\n      <p class=\"footer\">{{ remainingCount() }} task(s) remaining</p>\n    </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map