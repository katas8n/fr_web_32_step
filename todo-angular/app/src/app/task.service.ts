import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ITask } from './interface/ITask.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasksSubj: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>(
        []
    );

    private tasks: Observable<ITask[]> = this.tasksSubj.asObservable();
    constructor() {}

    public getTasks() {
        return this.tasksSubj;
    }

    public addTask(task: ITask) {
        const tasksValues = this.tasksSubj.value;

        const newTask: ITask = {
            id: `id${Math.random().toString().slice(3, 9)}`,
            title: task.title,
            description: task.description,
            status: 'To do'
        };

        this.tasksSubj.next([...tasksValues, newTask]);
    }
}
