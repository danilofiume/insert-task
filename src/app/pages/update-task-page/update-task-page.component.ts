import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task.model';
import { switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-task-page',
  templateUrl: './update-task-page.component.html',
  styleUrls: ['./update-task-page.component.css']
})
export class UpdateTaskPageComponent {
  @ViewChild('updateTaskForm') updateTaskForm: NgForm;

  taskUpdate: ITask = { id: null, completed: null, title: '', description: '' };

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService, private router: Router) {
    this.activatedRoute.params.pipe(
      switchMap((params) => this.taskService.getTaskById(params.taskId))
    ).subscribe((task) => {
      this.taskUpdate = task;
      console.log(this.taskUpdate);
    });
  }

  onSubmit(): void {
    // Accedi all'elemento del DOM del form
    const formElement: NgForm = this.updateTaskForm;
    this.taskService.updateTask(formElement.value).subscribe((task) => {
      this.router.navigate(['dashboard'])
    })
  }
}
