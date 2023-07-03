import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { HomeComponent } from './view/home/home.component';
import { TaskService } from './services/tasks/task.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListTasksComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule,
  ],
  providers: [TaskService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
