import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalAddTasksComponent } from './modal-add-tasks/modal-add-tasks.component';
import { Tasks } from 'src/app/models/tasks/tasks';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],
})
export class AddTasksComponent {
  @Output() itemAdded = new EventEmitter<Tasks>();
  constructor(private dialogService: DialogService) {}

  openModal() {
    const modal = this.dialogService.open(ModalAddTasksComponent, {
      header: 'Add task',
      width: '40rem',
    });

    modal.onClose.subscribe((task: Tasks) => {
      if (task) {
        this.itemAdded.emit(task);
      }
    });
  }
}
