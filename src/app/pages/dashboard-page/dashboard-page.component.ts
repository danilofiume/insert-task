import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

  public taskList: ITask[];

  constructor(private taskService: TaskService, private router: Router) {
    this.initPage();
  }


  initPage() {
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.taskList = tasks
    })
  }


  onGoToDetails(taskId: number): void {
    this.router.navigate(['detail-task', taskId])
  }

  onGoToUpdate(taskId: number): void {
    this.router.navigate(['update-task', taskId])
  }


  onDeleteTask(taskId:number) : void {
    this.taskService.deleteTask(taskId).subscribe((updateList: ITask[])=> {
      this.taskList = updateList
    })
    
  }

  onCompleteTask(task: ITask) : void {
    task.completed = true;
    this.taskService.updateTask(task).subscribe((updatedList: ITask[]) => {
      this.taskList = updatedList
    })
    
  }

  onUncompleteTask(task: ITask) : void {
    task.completed = false;
    this.taskService.updateTask(task).subscribe((updatedList: ITask[]) => {
      this.taskList = updatedList
    })
    
  }

  onUpdateTask(task:ITask):void {

    // if(task.completed) {
    //   task.completed = false
    // } else {
    //   task.completed = true
    // }

    task.completed = !task.completed

    this.taskService.updateTask(task).subscribe((updatedList: ITask[]) => {
      this.taskList = updatedList
    })
  }

 
}
