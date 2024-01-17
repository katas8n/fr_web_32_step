import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  @Output() taskEmitter = new EventEmitter();

  public title = "Hello everyONE!";

  private tasks: string[] = [
    "Walk along a street",
    "Talk with Misha about lessons",
    "Buy some food"
  ]

  public emitHandler():void {
    this.taskEmitter.emit(this.getAllTasks());
  }

  private getAllTasks() {
    return this.tasks;
  }

  ngOnInit(): void {
    this.emitHandler()
  }
}
