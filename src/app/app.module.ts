import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { InsertTaskPageComponent } from './pages/insert-task-page/insert-task-page.component';
import { UpdateTaskPageComponent } from './pages/update-task-page/update-task-page.component';
import { DetailTaskPageComponent } from './pages/detail-task-page/detail-task-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    InsertTaskPageComponent,
    UpdateTaskPageComponent,
    DetailTaskPageComponent,
    NavbarComponent,
    TableComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
