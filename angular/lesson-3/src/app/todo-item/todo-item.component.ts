import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todoItem:string;

  constructor(
    public todoService:TodoService
  ) {}

  onDeleteHandler(str) {
    this.todoService.deleteTodo(str);
  }
}
