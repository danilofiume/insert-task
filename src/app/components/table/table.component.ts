import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() tasks: ITask[];

  @Output() details: EventEmitter<number> = new EventEmitter();

  @Output() delete: EventEmitter<number> = new EventEmitter();
  
  @Output() complete: EventEmitter<ITask> = new EventEmitter();
  
  @Output() uncomplete: EventEmitter<ITask> = new EventEmitter();

  @Output() update: EventEmitter<ITask> = new EventEmitter();
  



  onDetails(taskId: number): void {
    this.details.emit(taskId);
  }

  onDelete(taskId: number): void{
    this.delete.emit(taskId)
  }

  onComplete(task: ITask):void {
    this.complete.emit(task)
  }

  onUncomplete(task: ITask): void {
    this.uncomplete.emit(task)
  }

  onUpdate(taskId):void {
    this.update.emit(taskId)
  }
}
