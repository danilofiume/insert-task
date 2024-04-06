import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ITask[] =[];

  private baseURL: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseURL);
  }

  getTaskById(taskId: number): Observable<ITask> {
    return this.http.get<ITask>(`${this.baseURL}/${taskId}`);
  }

  createTask(newTask: ITask): Observable<number> {
    return this.http.post<number>(this.baseURL, newTask)
  }

  deleteTask(taskId: number): Observable<ITask[]> {
    return this.http.delete<ITask[]>(`${this.baseURL}/${taskId}`)
  }

  updateTask(task:ITask):Observable<ITask[]> {
    return this.http.put<ITask[]>(`${this.baseURL}/${task.id}`, task);
  }

 
}
