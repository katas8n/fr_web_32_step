import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: string[] = ["Say hello!", "say goodbye!"];

  constructor() { }

  getTodos():string[] {
    return this.todos;
  }

  addTodo(todo:string): void {
    this.todos.push(todo)
  }

  deleteTodo(str): void {
    this.todos = this.todos.filter(i => i !== str);
    console.log(str, "was succesfully deleted!")
  }
}
