import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { InsertTaskPageComponent } from './pages/insert-task-page/insert-task-page.component';
import { UpdateTaskPageComponent } from './pages/update-task-page/update-task-page.component';
import { DetailTaskPageComponent } from './pages/detail-task-page/detail-task-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'insert-task',
    component: InsertTaskPageComponent
  },
  {
    path: 'update-task/:taskId',
    component: UpdateTaskPageComponent
  },
  {
    path: 'detail-task/:taskId',
    component: DetailTaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
