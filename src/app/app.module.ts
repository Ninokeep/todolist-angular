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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { FormTasksComponent } from './components/form-tasks/form-tasks.component';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ModalAddTasksComponent } from './components/add-tasks/modal-add-tasks/modal-add-tasks.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    HomeComponent,
    TasksComponent,
    AddTasksComponent,
    FormTasksComponent,
    ModalAddTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule,
    ToastModule,
    DynamicDialogModule,
    InputTextModule,
    ProgressSpinnerModule,
  ],
  providers: [
    TaskService,
    HttpClient,
    MessageService,
    DialogService,
    DynamicDialogRef,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
