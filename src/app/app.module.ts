import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { HomeComponent } from './view/home/home.component';
import { TaskService } from './services/tasks/task.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ListTasksComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, HttpClientModule],
  providers: [TaskService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
