import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ITask } from '../interface/ITask.model';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
    public tasks: Observable<ITask[]>;

    constructor(private taskService: TaskService) {
        this.tasks = this.taskService.getTasks();

        this.tasks.forEach(task => {
            console.log(task);
        });
    }

    ngOnInit(): void {}
}
