import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalAddTasksComponent } from './modal-add-tasks/modal-add-tasks.component';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],
})
export class AddTasksComponent {
  constructor(private dialogService: DialogService) {}

  openModal() {
    this.dialogService.open(ModalAddTasksComponent, {
      header: 'Add task',
      width: '40rem',
    });
  }
}
