import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  filter: "all" | "active" | "done" = "all";
  allItems = [
    {"title": "Sweep the floor", "status": "completed"},
    {"title": "History Homework", "description": "ABCSS Prelim 2022 Paper 1 Timed Practice", "done": false},
  ]
  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  addItem(title: string, description: string = "") {
    this.allItems.unshift({
      title,
      description,
      done: false
    });
  }

  @Output() itemAdded = new EventEmitter<{ title: string, description: string }>();

  onCreateClick(title: string, description: string) {
    this.addItem(title, description);
    this.itemAdded.emit({ title, description });
  }
}
