import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TaskComponent } from './task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild(TaskComponent) taskComponent!: TaskComponent;
  onToggleHidingCompleted() {
    // document.getElementById("tasks")!.classList.toggle("hidecompleted");
    this.taskComponent.hideCompleted = !this.taskComponent.hideCompleted;
  }

  onCreateClick(title: string, description: string) {
    this.taskComponent.addItem(title, description);
  }

  onDeleteClick(index: number) {
    this.taskComponent.allItems.splice(index, 1);
  }
}
