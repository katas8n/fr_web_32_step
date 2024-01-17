import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  public newTodo:string = "";

  constructor(
    public todoService: TodoService
  ) {

  }

  addNewTodo():void {
    this.todoService.addTodo(this.newTodo);
  }

  getAllTodos():string[] {
    return this.todoService.getTodos();
  }

  deleteTodo(todoIndex:number) {
    this.todoService.deleteTodo(todoIndex);
  }
}
