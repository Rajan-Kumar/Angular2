import { Component } from '@angular/core';

interface TodoItem {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'demo-app',
  template: `
    <section class="todo-app">
      <h1>Todo App</h1>
      <p class="subtitle">A small Angular project for learning.</p>

      <div class="add-row">
        <input
          [(ngModel)]="newTodoTitle"
          (keyup.enter)="addTodo()"
          placeholder="What do you want to do?"
        />
        <button (click)="addTodo()">Add</button>
      </div>

      <p class="hint" *ngIf="todos.length === 0">No tasks yet. Add your first one!</p>

      <ul>
        <li *ngFor="let todo of todos; let i = index" [class.done]="todo.completed">
          <label>
            <input type="checkbox" [(ngModel)]="todo.completed" />
            <span>{{ todo.title }}</span>
          </label>
          <button (click)="removeTodo(i)" class="delete-btn">Delete</button>
        </li>
      </ul>

      <p class="footer">{{ remainingCount() }} task(s) remaining</p>
    </section>
  `
})
export class AppComponent {
  newTodoTitle = '';
  todos: TodoItem[] = [
    { title: 'Learn Angular component basics', completed: true },
    { title: 'Build a Todo app', completed: false }
  ];

  addTodo() {
    var title = this.newTodoTitle.trim();

    if (!title) {
      return;
    }

    this.todos.push({ title: title, completed: false });
    this.newTodoTitle = '';
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  remainingCount() {
    return this.todos.filter(function(todo) {
      return !todo.completed;
    }).length;
  }
}
