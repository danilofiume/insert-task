import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task.model';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-detail-task-page',
  templateUrl: './detail-task-page.component.html',
  styleUrl: './detail-task-page.component.css'
})
export class DetailTaskPageComponent {

  taskDetails: ITask;

  // callback hell

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService, private router: Router) {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log('params', params)
    //   this.taskService.getTaskById(params.taskId).subscribe((task) => {
    //     console.log('task',task)
    //   })
    // })



    this.activatedRoute.params
    .pipe(
      switchMap(
        (params) => {
          console.log('params dentro switchMap', params)
          return this.taskService.getTaskById(params.taskId)
        }
    ))
    .subscribe((task) => {
      this.taskDetails = task;
    })
  }

  onUpdate(){
    this.router.navigate([`update-task/${this.taskDetails.id}`])
    console.log(this.taskDetails);
    
  }

  onBack(){
    this.router.navigate(['dashboard'])
    
  }
}
