import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-task-page',
  templateUrl: './insert-task-page.component.html',
  styleUrl: './insert-task-page.component.css'
})
export class InsertTaskPageComponent {

  constructor(private taskService: TaskService, private router: Router){}

  onInsertTask(insertTaskForm: NgForm): void {
    console.log(insertTaskForm); 
    this.taskService.createTask(insertTaskForm.value)
    .subscribe(() => {
     this.router.navigate(['dashboard'])
      
    })
    // passiamo il valore dell'oggetto grazie a ng form
  }

}
