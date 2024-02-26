import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    public routes = [
        {
            href: '',
            lable: 'Tasks'
        },
        {
            href: '/add-task',
            lable: 'Add task'
        }
    ];
}
