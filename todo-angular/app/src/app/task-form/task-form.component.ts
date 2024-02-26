import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
    constructor(public taskService: TaskService) {}

    public addNewTask(form) {
        this.taskService.addTask(form.value);
    }
}
